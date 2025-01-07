import { useRef } from "react";
import { Link } from "react-router-dom";
import { useIsVisible } from "./Visibility";
import { StyleMode } from "./StyleMode";

export default function FadeButton({styleMode, linkPath="/", width="w-full", height="h-full", extraClass="", extraInnerClass="", children} : any)
{
    const ref1 : any = useRef();
    const isVisible : boolean = useIsVisible(ref1);

    let bgStyle = "";
    
    switch(styleMode)
    {
        case StyleMode.DARK_MODE:
            bgStyle = "bg-slate-800"; 
            break;
        case StyleMode.LIGHT_MODE:
            bgStyle = "bg-zinc-200";
            break;
    }

    return (
        <Link to={linkPath} ref={ref1} className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${extraClass}`}>
            <button className={`group/fade-button relative ${width} ${height} rounded-lg ${bgStyle} hover:font-medium hover:scale-[102%] transition-all duration-150 overflow-hidden pointer-events-auto ${extraInnerClass}`}>
                <div className={`absolute ${width} ${height} top-0 left-[-100%] opacity-20 scale-y-[101%] scale-x-[201%] group-hover/fade-button:opacity-100 group-hover/fade-button:translate-x-[150%] duration-200 bg-gradient-to-r from-50% from-nebdev pointer-events-none`} />
                <div className="relative">
                    {children}
                </div>
            </button>
        </Link>
    )
}