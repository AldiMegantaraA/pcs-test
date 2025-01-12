
import { newsItems } from '../data';
import { useState, useRef, useEffect } from 'react';
export default function CardNews() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStart = useRef<number | null>(null);
    const touchEnd = useRef<number | null>(null);
    const slideRef = useRef<HTMLDivElement>(null);

    const minSwipeDistance = 50;

    const handleTouchStart = (e: React.TouchEvent) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEnd.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        
        const distance = touchStart.current - touchEnd.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && currentSlide < newsItems.length - 1) {
        setCurrentSlide(prev => prev + 1);
        }
        if (isRightSwipe && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
        }
    };

    useEffect(() => {
        if (slideRef.current) {
            const cardWidth = slideRef.current.children[0].clientWidth;
            const gap = 16; // gap between cards
            const offset = (window.innerWidth - cardWidth) / 2 - 40; // center the card and account for parent padding
            slideRef.current.style.transform = `translateX(calc(${offset}px - ${currentSlide * (cardWidth + gap)}px))`;
        }
    }, [currentSlide]);
  
    return (
        <div>
            <div className="relative overflow-hidden">
                <div className="overflow-hidden">
                    <div 
                    ref={slideRef}
                    className="flex gap-4 transition-transform duration-300 ease-out px-4 py-4"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    >
                    {newsItems.map((item) => (
                        <div key={item.id} className="w-[calc(100vw-80px)] flex-shrink-0 bg-white rounded-lg shadow-md p-4">
                            <div className="flex gap-3">
                                <img src={item.avatar} alt={item.author} className="w-10 h-10 rounded-full" />
                                <div>
                                    <h3 className="font-medium">{item.author}</h3>
                                    <p className="text-sm text-gray-500">{item.date}</p>
                                </div>

                            </div>
                            {item.content.map((line, i) => (
                                <p key={i} className="text-sm text-gray-600 mt-1">{line}</p>
                            ))}
                        </div>
                    ))}
                    </div>
                </div>
                
            </div>
            <div className="flex justify-center gap-2 my-3">
                {newsItems.map((_, index) => (
                <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-red-500' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                />
                ))}
            </div>
        </div>
    );
}