import { useLayoutEffect, useState } from "react";
import bg_image from "../assets/temp-bg.png";
import landings_text from "../assets/landings.txt"

export default function Hero() {
    
    const [scrollY, setScrollY] = useState(0);
    
    fetch(landings_text)
    .then(r => r.text())
    .then(text => {
    console.log('text decoded:', text);
    });

    useLayoutEffect(() => {

        const onScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", onScroll)
      
        return () => window.removeEventListener("scroll", onScroll)
      
    }, [])
    
    return (
        <>
            <div className="w-full h-screen flex fixed top-0 left-0 m-auto anim-open-scale-down-20 -z-10">
                <div style={{
                    transform : `origin-center translateY(${scrollY * -0.1}%) scale(${100 + scrollY * 0.025 }%)`
                }}>
                    <img className="absolute object-cover object-center origin-center w-full h-full m-auto anim-pulse-10" src={bg_image} />
                </div>
            </div>
            <div className="w-full h-[calc(100vh-6.5rem)] sm:h-[calc(100vh-3.5rem)] text-center flex items-center justify-center">
                <div className="mt-[-200px] anim-open-move-down-100 -z-10">
                    <div style={{
                        transform : `translateY(${scrollY * 0.15}%) scale(${100 + scrollY * -0.01 }%)`,
                        opacity : `100%`
                    }}>
                        <h1 className="text-[#5297FF] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-mono font-bold md:mb-[-15px] lg:mb-[-25px] lg:mr-[650px]">I AM A</h1>
                        <h1 className="text-white text-[40px] sm:text-[60px] md:text-[75px] lg:text-[100px] xl:text-[125px] 2xl:text-[150px] font-mono font-bold">Really Big Nerd</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
