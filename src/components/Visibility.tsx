import { useEffect, useRef, useState } from 'react';

// https://medium.com/@jacobvejlinjensen/how-to-create-a-smooth-appear-on-scroll-transition-with-tailwind-css-and-react-82f2a32ab295

export function useIsVisible(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
        } 
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref]);
  
    return isIntersecting;
}