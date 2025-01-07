import { Link } from 'react-router-dom'
import FadeButton from './FadeButton';
import { SVGMenu } from './Icons';
import { useRef, useState } from 'react';
import { useIsVisible } from './Visibility';
import StyleModeButton, { StyleMode } from './StyleMode';

function NavMenu({styleMode, setStyleMode}: any)
{
    const ref1 : any = useRef();
    const isVisible : boolean = useIsVisible(ref1);

    let bgStyle = "";
    let textStyle = "";
    let textSmallStyle = "";
        
    switch(styleMode)
    {
        case StyleMode.DARK_MODE:
            bgStyle = "bg-gradient-to-br from-[#1e293bea] to-[#09090bea]"; 
            textStyle = "font-mono text-white";
            textSmallStyle = "text-slate-400";
            break;
        case StyleMode.LIGHT_MODE:
            bgStyle = "bg-gradient-to-br from-zinc-100 to-zinc-100";
            textStyle = "font-mono text-black";
            textSmallStyle = "text-gray-400";
            break;
    }
    
    return (
        <div ref={ref1} className={`absolute w-full left-0 sm:left-2 top-[3.25rem] sm:top-[4.0rem] sm:w-[400px] h-fit ${bgStyle} sm:rounded-xl transition-all duration-150 ${isVisible ? 'opacity-100 translate-y-[0%]' : 'opacity-0 -translate-y-[100%]'}`}>
            <div className="w-full basis-1/3 justify-self-center p-5">
                <div className='relative flex w-full h-fit'>
                    <StyleModeButton styleMode={styleMode} setStyleMode={setStyleMode} extraClass="absolute "/>
                </div>
                <div className="w-full mx-auto grid grid-rows-3 h-full gap-2 justify-items-center">
                    
                    <div className='w-full h-[10px] p-2'/>
                    <FadeButton styleMode={styleMode} height="h-[3.0rem]" linkPath="/" extraClass="w-full">
                        <h1 className={`text-base sm:text-xl ${textStyle} text-center h-full`}>Home</h1>
                    </FadeButton>
                    <FadeButton styleMode={styleMode} height="h-[3.0rem]" linkPath="/projects" extraClass="w-full">
                        <h1 className={`text-base sm:text-xl ${textStyle} text-center h-full`}>Projects</h1>
                    </FadeButton>
                    <FadeButton styleMode={styleMode} height="h-[3.0rem]" linkPath="/blog" extraClass="w-full">
                        <h1 className={`text-base sm:text-xl ${textStyle} text-center h-full`}>Blog</h1>
                    </FadeButton>
                    <FadeButton styleMode={styleMode} height="h-[3.0rem]" linkPath="/contact" extraClass="w-full">
                        <h1 className={`text-base sm:text-xl ${textStyle} text-center h-full`}>Contact</h1>
                    </FadeButton>
                    
                    <h2 className={`${textSmallStyle} text-[12px] text-center content-center m-auto p-3`}>Website by Ben Ratcliff</h2>
                </div>
            </div>
        </div>
    );
}

export default function Header({styleMode, setStyleMode, isSticky=true, showBg=true, showLogo=true, showNav=true, showLogin=true, showMode=true, disableLogoLink=false, disableAnim=false, highZ=false}: any) {

    const [isNavMenuOpen, setNavMenuOpen] = useState(false);

    function toggleNavMenu()
    {
        setNavMenuOpen(!isNavMenuOpen);
    }

    let bgStyle = "";
    let textStyle = "";
    let nebulousStyle = "";
    let devStyle = "";
    let hamburgerStyle = "";
        
    switch(styleMode)
    {
        case StyleMode.DARK_MODE:
            bgStyle = "bg-[#000000b0]"; 
            textStyle = "font-mono text-white";
            nebulousStyle = "text-white group-hover:text-nebdev";
            devStyle = "text-nebdev group-hover:text-white font-bold";
            hamburgerStyle = "fill-white";
            break;
        case StyleMode.LIGHT_MODE:
            bgStyle = "bg-[#FFFFFFf0]";
            textStyle = "font-mono text-black";
            nebulousStyle = "text-black group-hover:text-nebdev";
            devStyle = "text-nebdev group-hover:text-black font-bold";
            hamburgerStyle = "fill-black";
            break;
    }

    return (
        <nav className={`flex flex-row justify-center w-full p-2 ${isSticky ? 'sticky' : ''} ${highZ? 'z-20' : 'z-10'} ${textStyle} top-0 h-[3.25rem] sm:h-[3.55rem] 
            ${showBg ? bgStyle : ''} pointer-events-none ${disableAnim ? '' : 'anim-open-move-down-100'}`}>

            {showLogo &&
            
                <div className={`${showNav ? 'basis-1/3' : 'basis-1/2'} justify-self-start`}>
                    <Link to={`${ disableLogoLink ? '' : '/'}`}>
                        <button className={`group text-3xl sm:text-4xl mx-2 ${ disableLogoLink && 'cursor-default' } pointer-events-auto`}>
                            <a className={`${nebulousStyle} duration-250 transition-all align-top`}>Nebulous</a>
                            <a className={`${devStyle} duration-250 transition-all align-top`}>Dev</a>
                        </button>
                    </Link>
                </div>

            }
            
            {showNav &&
                <>
                    <div className="basis-1/3 justify-self-center">
                        <div className="w-[450px] mx-auto grid grid-cols-3 h-full space-x-2 hidden lg:grid">
                            <FadeButton styleMode={styleMode} linkPath="/projects">
                                <h1 className="text-base sm:text-xl text-center">Projects</h1>
                            </FadeButton>
                            <FadeButton styleMode={styleMode} linkPath="/blog">
                                <h1 className="text-base sm:text-xl text-center">Blog</h1>
                            </FadeButton>
                            <FadeButton styleMode={styleMode} linkPath="/contact">
                                <h1 className="text-base sm:text-xl text-center">Contact</h1>
                            </FadeButton>
                        </div>
                    </div>

                    <div className='group order-first shrink-0 visible lg:hidden pointer-events-auto' onClick={toggleNavMenu}>
                        <SVGMenu className={`${hamburgerStyle} hover:fill-nebdev pl-[5px] pr-[2px] py-[2px] w-[40px] sm:w-[40px] h-[40px] sm:h-[40px] mt-[-2px] sm:mt-0`}/>

                        { isNavMenuOpen &&
                    
                        <>
                            <NavMenu styleMode={styleMode} setStyleMode={setStyleMode} />
                        </>
                        
                        }
                    </div>

                </>
            }

            {showMode && 
                <div className="absolute hidden sm:block sm:right-[140px]">
                    <StyleModeButton styleMode={styleMode} setStyleMode={setStyleMode} />
                </div>
            }

            {showLogin &&

                <div className={`${showNav ? 'basis-1/3' : 'basis-1/2'} justify-self-end flex flex-row-reverse text-nowrap`}>
                    <FadeButton styleMode={styleMode} linkPath="">
                        <h1 className="text-base sm:text-xl px-4 sm:px-6 text-center">Log In</h1>
                    </FadeButton>
                </div>

            }

        </nav>
    )
}
