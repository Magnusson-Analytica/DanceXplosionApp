// Shared contact details and helpers for every WhatsApp / phone call-to-action

export const WHATSAPP_NUMBER = "40751327415";
export const PHONE_TEL = "+40751327415";
export const PHONE_DISPLAY = "0751 327 415";

export const DEFAULT_MESSAGE = "Bună ziua! Aș dori mai multe informații despre cursurile Dance Xplosion Academy.";

export const whatsappUrl = (message = DEFAULT_MESSAGE) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Phones and tablets go straight to WhatsApp; desktops get a choice, since many people
// there don't have WhatsApp Web set up
export const isMobileDevice = () =>
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    window.matchMedia('(pointer: coarse)').matches;
