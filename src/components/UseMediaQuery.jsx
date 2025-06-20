import { useEffect, useState } from 'react';

export default function UseMediaQuerity(breakPoint = 601){
    const query = `(max-width: ${breakPoint}px)`;

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

    if(navigator.userAgent.includes('OPR/') || navigator.userAgent.includes('Opera')){
        return true;
    }

    return isMobile;
}
