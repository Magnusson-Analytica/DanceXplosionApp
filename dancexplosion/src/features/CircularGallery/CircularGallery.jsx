import React, { useRef, useEffect } from 'react';
import './CircularGallery.css';
import { navigate } from '../../router';

// Using the correct relative paths to your uploaded images
import nicoletaPhoto from '../../assets/images/nicoleta_cristina.png';
import alexLazarPhoto from '../../assets/images/alex_lazar.jpg';
import alexMagPhoto from '../../assets/images/alex_magnusson.JPG';
import alexandraPhoto from '../../assets/images/alexandra_ivan.jpeg';
import adrianPhoto from '../../assets/images/adrian_rasinariu.jpeg';

const getRunningTransformOffset = (element) => {
    const style = window.getComputedStyle(element);
    const transform = style.transform;
    if (transform === 'none') return 0;
    
    const matrix = transform.match(/matrix(3d)?\((.*)\)/);
    if (matrix) {
        const values = matrix[2].split(', ').map(parseFloat);
        return values.length === 16 ? values[12] : values[4]; 
    }
    return 0;
};

// Added 'slug' to all members to enable navigation
const teamMembersData = [
    { id: 1, name: "Nicoleta Cristina", role: "Instructor", slug: "nicoleta-cristina", image: nicoletaPhoto },
    { id: 2, name: "Alex Lazar", role: "Instructor", slug: "alex-lazar",  image: alexLazarPhoto }, 
    { id: 3, name: "Alex Magnusson", role: "Instructor", slug: "alex-magnusson", image: alexMagPhoto },
    { id: 4, name: "Alexandra Ivan", role: "Instructor", slug: "alexandra-ivan", image: alexandraPhoto },
    { id: 5, name: "Adrian Rașinariu", role: "Instructor", slug: "adrian-rasinariu", image: adrianPhoto },
];

const InfiniteMovingTeamCarousel = ({ items = teamMembersData, initialSpeed = '30s', slowedSpeed = '120s' }) => {
    const duplicateItems = [...items, ...items];
    const trackRef = useRef(null);
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    
    const handleMouseEnter = () => {
        const track = trackRef.current;
        if (!track) return;
        track.style.animationPlayState = 'paused';
        const currentOffsetPx = getRunningTransformOffset(track);
        const totalTrackWidth = track.clientWidth / 2; 
        const offsetPercentage = Math.abs(currentOffsetPx) / totalTrackWidth;
        const newDelay = parseFloat(slowedSpeed) * offsetPercentage; 
        track.style.animation = 'none';
        track.style.transform = `translateX(${currentOffsetPx}px)`;
        void track.offsetHeight;
        track.style.animation = `infinite-scroll ${slowedSpeed} linear infinite`;
        track.style.animationDelay = `-${newDelay}s`;
        track.style.animationPlayState = 'running';
        if (containerRef.current) containerRef.current.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
        const track = trackRef.current;
        if (!track) return;
        track.style.animationPlayState = 'paused';
        const currentOffsetPx = getRunningTransformOffset(track);
        const totalTrackWidth = track.clientWidth / 2; 
        const offsetPercentage = Math.abs(currentOffsetPx) / totalTrackWidth;
        const newDelay = parseFloat(initialSpeed) * offsetPercentage; 
        track.style.animation = 'none';
        track.style.transform = `translateX(${currentOffsetPx}px)`;
        void track.offsetHeight;
        track.style.animation = `infinite-scroll ${initialSpeed} linear infinite`;
        track.style.animationDelay = `-${newDelay}s`;
        track.style.animationPlayState = 'running';
        if (containerRef.current) containerRef.current.style.cursor = 'default';
    };
    
    const getPositionX = (e) => e.touches ? e.touches[0].pageX : e.pageX;

    const handleStart = (e) => {
        const container = containerRef.current;
        if (!container || (e.touches && e.touches.length > 1)) return;
        isDragging.current = true;
        const track = trackRef.current;
        if (track) track.style.animationPlayState = 'paused';
        startX.current = getPositionX(e) + container.scrollLeft;
        container.style.cursor = 'grabbing';
    };

    const handleEnd = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        const container = containerRef.current;
        const track = trackRef.current;
        if (track) track.style.animationPlayState = 'running';
        if (container) container.style.cursor = 'grab';
    };

    const handleMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;
        const currentX = getPositionX(e);
        const newScrollLeft = startX.current - currentX;
        container.scrollLeft = newScrollLeft;
        const singleContentWidth = track.scrollWidth / 2;
        if (container.scrollLeft >= singleContentWidth) {
            container.scrollLeft -= singleContentWidth;
            startX.current -= singleContentWidth;
        }
        if (container.scrollLeft < 0) {
            container.scrollLeft += singleContentWidth;
            startX.current += singleContentWidth;
        }
    };
    
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        container.addEventListener('mousedown', handleStart);
        container.addEventListener('touchstart', handleStart, { passive: false });
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchend', handleEnd);
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove, { passive: false });
        return () => {
            container.removeEventListener('mousedown', handleStart);
            container.removeEventListener('touchstart', handleStart);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchend', handleEnd);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
        };
    }, []);

    // Updated click handler to support all instructors
    const handleCardClick = (item) => {
        if (item.slug) {
            navigate(`/instructori/${item.slug}`);
        }
    };

    return (
        <div 
            className="infinite-carousel-container" 
            ref={containerRef}
            // onMouseEnter={handleMouseEnter} // Optional: uncomment if you want slow-down on hover
            // onMouseLeave={handleMouseLeave}
        >
            <div 
                className="infinite-carousel-track" 
                ref={trackRef} 
                style={{ animationDuration: initialSpeed }}
            >
                {duplicateItems.map((item, index) => {
                    // Keeping your existing specific photo alignment
                    const photoClass =
                        item.slug === 'alexandra-ivan' ? 'photo-align-top' :
                        item.slug === 'adrian-rasinariu' ? 'photo-align-upper' : '';

                    // The second copy only exists for the seamless loop, so hide it from screen readers
                    const isDuplicate = index >= items.length;

                    return (
                        <div 
                            key={`${item.id}-${index}`} 
                            className="team-card-infinite"
                            onClick={() => handleCardClick(item)}
                            aria-hidden={isDuplicate || undefined}
                        >
                            <div className="card-photo-wrapper">
                                <img 
                                    src={item.image} 
                                    alt={`${item.name}, instructor Dance Xplosion Academy`} 
                                    loading="lazy"
                                    className={`member-photo-infinite ${photoClass}`}
                                />
                            </div>
                            <div className="card-overlay-infinite">
                                <h3 className="member-name-infinite">{item.name}</h3>
                                <p className="member-role-infinite">{item.role}</p>
                                <span className="cta-overlay-infinite">Detalii & Orar</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default InfiniteMovingTeamCarousel;