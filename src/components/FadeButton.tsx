import { useRef } from "react";
import { Link } from "react-router-dom";
import { useIsVisible } from "./Visibility";

export default function FadeButton({linkPath="/", width="w-full", height="h-full", extraClass="", children} : any)
{
    const ref1 : any = useRef();
    const isVisible : boolean = useIsVisible(ref1);

    return (
        <Link to={linkPath} ref={ref1} className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button className={`group ${width} ${height} rounded-lg bg-slate-800 hover:font-medium hover:scale-[102%] transition-all duration-150 overflow-hidden pointer-events-auto ${extraClass}`}>
                <div className={`absolute ${width} ${height} top-0 left-[-100%] opacity-20 scale-[101%] group-hover:opacity-100 group-hover:translate-x-[200%] duration-200 bg-gradient-to-r from-20% from-nebdev`} />
                <div className={`absolute ${width} ${height} top-0 left-[-200%] opacity-20 scale-[101%] group-hover:opacity-100 group-hover:translate-x-[200%] duration-200 bg-nebdev`} />
                <div className="isolate">
                    {children}
                </div>
            </button>
        </Link>
    )
}