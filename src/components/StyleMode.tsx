import { SVGMoon, SVGSun } from "./Icons";

export enum StyleMode {
    DARK_MODE,
    LIGHT_MODE
}

export default function StyleModeButton({styleMode, setStyleMode, extraClass=""}: any){

    function toggleDarkMode()
    {
        setStyleMode(styleMode == StyleMode.LIGHT_MODE ? StyleMode.DARK_MODE : StyleMode.LIGHT_MODE);
    }

    let bgStyle = "";
    let bgCircleStyle = "";
    let fillMoonStyle = "";
    let fillSunStyle = "";
    let offsetCircleStyle = "";
        
    switch(styleMode)
    {
        case StyleMode.DARK_MODE:
            bgStyle = "bg-slate-800 hover:bg-slate-700"; 
            bgCircleStyle = "bg-zinc-900";
            fillMoonStyle = "fill-nebdev";
            fillSunStyle = "fill-zinc-400";
            offsetCircleStyle = "translate-x-0";
            break;
        case StyleMode.LIGHT_MODE:
            bgStyle = "bg-gray-200 hover:bg-slate-300";
            bgCircleStyle = "bg-zinc-100";
            fillMoonStyle = "fill-zinc-400";
            fillSunStyle = "fill-nebdev";
            offsetCircleStyle = "translate-x-[130%]"; 
            break;
    }

    return (
        <div className={`w-[80px] h-[40px] pointer-events-auto z-10 ${extraClass}`}>
            <button className={`group relative w-full h-full ${bgStyle} rounded-full`} onClick={toggleDarkMode}>
                <div className={`absolute top-[5px] left-[5px] w-[30px] h-[30px] rounded-full ${bgCircleStyle} transform-all duration-200 ${offsetCircleStyle}`}/>
                <SVGMoon className={`absolute top-[8px] left-[9px] w-[25px] h-[25px] ${fillMoonStyle}`}/>
                <SVGSun className={`absolute top-[8px] left-[46px] w-[25px] h-[25px] ${fillSunStyle}`}/>
            </button>
        </div> 
    )
}
