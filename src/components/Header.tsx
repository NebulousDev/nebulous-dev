import { Link } from 'react-router-dom'
import profile_image from "../assets/totoro_square.png";
import FadeButton from './FadeButton';

export default function Header({isSticky=true, showBg=true, showLogo=true, showNav=true, showLogin=true, below=false, disableLogoLink=false, disableAnim=false, highZ=false}) {

    return (
        <nav className={`flex flex-row justify-center w-full p-2 ${isSticky ? 'sticky' : ''} ${highZ? 'z-20' : 'z-10'} top-0 h-[3.25rem] sm:h-[3.5rem] 
            ${below ? 'z-20' : 'z-0'} ${showBg ? 'bg-[#000000aa]' : ''} pointer-events-none ${disableAnim ? '' : 'anim-open-move-down-100'}`}>

            {showLogo &&
            
                <div className={`${showNav ? 'basis-1/3' : 'basis-1/2'} justify-self-start`}>
                    <Link to={`${ disableLogoLink ? '' : '/'}`}>
                        <button className={`group text-3xl sm:text-4xl mx-2 ${ disableLogoLink && 'cursor-default' } pointer-events-auto`}>
                            <a className="text-white group-hover:text-nebdev duration-250 transition-all font-mono">Nebulous</a>
                            <a className="text-nebdev group-hover:text-white duration-250 transition-all font-mono font-bold">Dev</a>
                        </button>
                    </Link>
                </div>

            }
            
            {showNav &&
                <>
                    <div className="basis-1/3 justify-self-center">
                        <div className="w-[450px] mx-auto grid grid-cols-3 h-full space-x-2 hidden lg:grid ">
                            <FadeButton linkPath="/projects">
                                <h1 className="text-base sm:text-xl text-white font-mono text-center">Projects</h1>
                            </FadeButton>
                            <FadeButton linkPath="/blog">
                                <h1 className="text-base sm:text-xl text-white font-mono text-center">Blog</h1>
                            </FadeButton>
                            <FadeButton linkPath="/contact">
                                <h1 className="text-base sm:text-xl text-white font-mono text-center">Contact</h1>
                            </FadeButton>
                        </div>
                    </div>

                    <div className='order-first shrink-0 visible lg:hidden'>
                        <img className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]" src={profile_image} />
                    </div>
                </>
            }

            {showLogin &&

                <div className={`${showNav ? 'basis-1/3' : 'basis-1/2'} justify-self-end flex flex-row-reverse`}>
                    <button className="h-full w-[110px] sm:w-[140px] bg-slate-800 duration-100 hover:bg-nebdev rounded-lg hover:font-medium decoration-slate-100 decoration-2 hover:scale-[102%] pointer-events-auto">
                        <h1 className="text-base sm:text-xl text-white font-mono px-4 sm:px-6 text-center">Log In</h1>
                    </button>
                </div>

            }

        </nav>
    )
}
