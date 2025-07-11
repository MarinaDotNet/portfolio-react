import { useEffect, useState } from 'react';

export default function UseMediaQuerity(breakPointWidth = 601, breakPointHeigth = 500){
    const query = `(max-width: ${breakPointWidth}px), (max-height: ${breakPointHeigth}px)`;

    const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined'
    ? window.matchMedia(query).matches
    : false);

    useEffect(() => {
        if(typeof window === 'undefined'){
            return;
        }
        
        const mediaQueryList = window.matchMedia(query);

        const handleChange = (event) => setIsMobile(event.matches);

        setIsMobile(mediaQueryList.matches);

        mediaQueryList.addEventListener('change', handleChange);

        return () => mediaQueryList.removeEventListener('change', handleChange);
    }, [query]);

    useEffect(() => 
    {
        console.log('UserAgent:', navigator.userAgent);
        console.log('devicePixelRatio:', window.devicePixelRatio);
        console.log('matchMedia:', query, '→', isMobile);
    }, [isMobile, query]);

    return isMobile;
}
