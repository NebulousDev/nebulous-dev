import { Link } from 'react-router-dom'
import FadeButton from './FadeButton';
import { SVGMenu } from './Icons';
import { useRef, useState } from 'react';
import { useIsVisible } from './Visibility';
import StyleModeButton, { StyleMode } from './StyleMode';

function NavMenu()
{
    const ref1 : any = useRef();
    const isVisible : boolean = useIsVisible(ref1);
    
    return (
        <div ref={ref1} className={`absolute left-0 top-[3.25rem] sm:top-[3.55rem] w-full sm:w-[400px] h-fit bg-zinc-950 sm:bg-[#000000aa] sm:rounded-br-xl transition-all duration-150 ${isVisible ? 'opacity-100 translate-y-[0%]' : 'opacity-0 -translate-y-[100%]'}`}>
            <div className="basis-1/3 justify-self-center p-5 w-full">
                <div className="w-full mx-auto grid grid-rows-3 h-full gap-2">
                    <FadeButton height="h-[3.0rem]" linkPath="/">
                        <h1 className="text-base sm:text-xl text-white font-mono text-center h-full">Home</h1>
                    </FadeButton>
                    <FadeButton height="h-[3.0rem]" linkPath="/projects">
                        <h1 className="text-base sm:text-xl text-white font-mono text-center h-full">Projects</h1>
                    </FadeButton>
                    <FadeButton height="h-[3.0rem]" linkPath="/blog">
                        <h1 className="text-base sm:text-xl text-white font-mono text-center h-full">Blog</h1>
                    </FadeButton>
                    <FadeButton height="h-[3.0rem]" linkPath="/contact">
                        <h1 className="text-base sm:text-xl text-white font-mono text-center h-full">Contact</h1>
                    </FadeButton>
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
                            <NavMenu />
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
