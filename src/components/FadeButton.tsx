import { useRef } from "react";
import { Link } from "react-router-dom";
import { useIsVisible } from "./Visibility";

export default function FadeButton({linkPath="/", width="w-full", height="h-full", extraClass="", children} : any)
{
    const ref1 : any = useRef();
    const isVisible : boolean = useIsVisible(ref1);

    return (
        <Link to={linkPath} ref={ref1} className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button className={`group/fade-button relative ${width} ${height} rounded-lg bg-slate-800 hover:font-medium hover:scale-[102%] transition-all duration-150 overflow-hidden pointer-events-auto ${extraClass}`}>
                <div className={`absolute ${width} ${height} top-0 left-[-100%] opacity-20 scale-y-[101%] scale-x-[201%] group-hover/fade-button:opacity-100 group-hover/fade-button:translate-x-[150%] duration-200 bg-gradient-to-r from-50% from-nebdev pointer-events-none`} />
                <div className="relative">
                    {children}
                </div>
            </button>
        </Link>
    )
}