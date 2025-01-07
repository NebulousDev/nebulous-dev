import { useEffect, useLayoutEffect, useState } from "react";
import bg_image from "../assets/temp-bg.png";
import landings_text from "../assets/landings.txt"

function HeroSlidingText() {

    const [textAllStrings,      setTextAllStrings       ]   = useState(["Software Developer", "Really Big Nerd", "Game Developer"]);
    const [textIdx,             setTextIdx              ]   = useState(0.0);

    useEffect(() => {

        fetch(landings_text).then(r => r.text()).then((text) => {

            const strings = text.split(/\r?\n/).reverse();

            setTextAllStrings(strings);
            setTextIdx(Math.floor(strings.length / 2) + 2)

            console.log('Landing Texts:\n' + text);
        });

    },[])

    useEffect(() => {

        const id = setInterval(() => {
            setTextIdx((textIdx + 1) % textAllStrings.length);
        }, 3000)

        return () => {clearInterval(id)};

    }, [textIdx])

    let activeComponents : any[] = [];

    for(let i = 0; i < textAllStrings.length; i++)
    {
        const yPos = ((i + (textIdx - Math.floor(textAllStrings.length / 2))) % textAllStrings.length) - 1;

        if(yPos == -1 || yPos == 0 || yPos == 1)
        {
            activeComponents.push(
    
                <h1 key={i} className="absolute top-0 w-full h-fit text-white text-center text-nowrap text-[35px] sm:text-[55px] md:text-[65px] lg:text-[75px] xl:text-[100px] 2xl:text-[120px] font-mono font-bold transform-all duration-[1s]"
                    style={{transform : `translateY(${yPos * 100}%)`, opacity : yPos == 0 ? '100%': '0%'}}>
                        {textAllStrings[i]}
                </h1>
    
            )
        }
    }

    return (
        <div className="relative w-full h-fit">

            { activeComponents }

        </div>
    );
}

export default function Hero() {
    
    const [scrollY, setScrollY] = useState(0);

    useLayoutEffect(() => {

        const onScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", onScroll)
      
        return () => window.removeEventListener("scroll", onScroll)
      
    }, []);
    
    return (
        <>
            <div className="w-full h-screen flex fixed top-0 left-0 m-auto anim-open-scale-down-20 -z-10">
                <div style={{
                    transform : `origin-center translateY(${scrollY * -0.1}%) scale(${100 + scrollY * 0.025 }%)`
                }}>
                    <img className="absolute object-cover object-center origin-center w-full h-full m-auto anim-pulse-10" src={bg_image} />
                </div>
            </div>
            <div className="w-full h-[calc(100vh-6.5rem)] sm:h-[calc(100vh-3.5rem)] text-center flex items-center">
                <div className="w-full h-fit mt-[-250px] anim-open-move-down-100">
                    <div className="w-full h-fit" style={{
                        transform : `translateY(${scrollY * 0.15}%) scale(${100 + scrollY * -0.01 }%)`,
                        opacity : `100%`
                    }}>
                        <h1 className="text-[#5297FF] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-mono font-bold md:mb-[-15px] lg:mb-[-25px] lg:mr-[650px]">I AM A</h1>
                        <HeroSlidingText />
                    </div>
                </div>
            </div>
        </>
    )
}
