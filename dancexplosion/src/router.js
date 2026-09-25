import { useState, useEffect } from 'react';
import { SITE_URL, findPage, legacyHashRoutes } from './seo/pages';

const NAVIGATE_EVENT = 'app:navigate';

// Client-side navigation between real URLs (/salsa, /copii, /#preturi on the home page)
export const navigate = (to) => {
    const url = new URL(to, window.location.origin);
    const changed = url.pathname !== window.location.pathname || url.hash !== window.location.hash;
    if (changed) window.history.pushState({}, '', url.pathname + url.hash);
    window.dispatchEvent(new Event(NAVIGATE_EVENT));
};

// Turn old links like /#salsa into /salsa, keeping in-page anchors like /#preturi as they are
const redirectLegacyHash = () => {
    const legacyPath = legacyHashRoutes[window.location.hash.slice(1)];
    if (legacyPath) window.history.replaceState({}, '', legacyPath);
};

export const useLocation = () => {
    const read = () => ({ path: window.location.pathname.replace(/\/+$/, '') || '/', hash: window.location.hash });
    const [location, setLocation] = useState(() => {
        redirectLegacyHash();
        return read();
    });

    useEffect(() => {
        const update = () => {
            redirectLegacyHash();
            setLocation(read());
        };
        window.addEventListener('popstate', update);
        window.addEventListener('hashchange', update);
        window.addEventListener(NAVIGATE_EVENT, update);
        return () => {
            window.removeEventListener('popstate', update);
            window.removeEventListener('hashchange', update);
            window.removeEventListener(NAVIGATE_EVENT, update);
        };
    }, []);

    return location;
};

// Send clicks on internal links through the router instead of reloading the page
export const handleLinkClick = (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target.closest('a[href]');
    if (!anchor || anchor.target || anchor.hasAttribute('download')) return;
    const href = anchor.getAttribute('href');
    if (!href.startsWith('/')) return;
    event.preventDefault();
    navigate(href);
};

const setMeta = (selector, attr, value) => {
    const el = document.head.querySelector(selector);
    if (el) el.setAttribute(attr, value);
};

// Keep the title, description, canonical and share tags in step with the current page
export const applyHead = (path) => {
    const page = findPage(path);
    const url = `${SITE_URL}${page.path === '/' ? '/' : page.path}`;
    document.title = page.title;
    setMeta('meta[name="description"]', 'content', page.description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', page.title);
    setMeta('meta[property="og:description"]', 'content', page.description);
    setMeta('meta[name="robots"]', 'content', page.path === '/404' ? 'noindex' : 'index, follow');
};
