import { Link } from 'react-router-dom'

export default function Header({isSticky=true, showBg=true, showLogo=true, showNav=true, showLogin=true, below=false, disableLogoLink=false}) {

    return (
        <nav className={`flex w-full p-2 ${isSticky ? 'sticky' : ''} top-0 h-[3.25rem] sm:h-[3.5rem] ${below ? 'z-20' : 'z-0'} ${showBg ? 'bg-black' : ''} pointer-events-none`}>

            {showLogo &&
                <Link to={`${ disableLogoLink ? '' : '/'}`}>
                    <button className="w-full h-full text-3xl sm:text-4xl mx-2 pointer-events-auto">
                        <a className="text-white font-mono">Nebulous</a>
                        <a className="text-[#5297FF] font-mono font-bold">Dev</a>
                    </button>
                </Link>
            }

            <div className="flex-auto" />
            
            {showNav &&
                <div className="grid grid-cols-3 justify-center space-x-2 pointer-events-auto">
                    <Link to="/projects">
                        <button className="w-full h-full bg-[#5297FF] hover:bg-[#82e0ff] rounded-xl hover:underline decoration-slate-100 decoration-2 justify-center">
                            <h1 className="text-base sm:text-xl text-white font-mono px-6 sm:px-8">Projects</h1>
                        </button>
                    </Link>
                    <Link to="/blog">
                        <button className="w-full h-full bg-[#5297FF] hover:bg-[#82e0ff] rounded-xl hover:underline decoration-slate-100 decoration-2 justify-center">
                            <h1 className="text-base sm:text-xl text-white font-mono px-6 sm:px-8">Blog</h1>
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="w-full h-full bg-[#5297FF] hover:bg-[#82e0ff] rounded-xl hover:underline decoration-slate-100 decoration-2 justify-center">
                            <h1 className="text-base sm:text-xl text-white font-mono px-6 sm:px-8">Contact</h1>
                        </button>
                    </Link>
                </div>
            }

            <div className="flex-auto" />

            {showLogin &&
                <button className="h-full bg-slate-800 hover:bg-[#82e0ff] rounded-xl hover:underline decoration-slate-100 decoration-2 justify-center pointer-events-auto">
                    <h1 className="text-base sm:text-xl text-white font-mono px-6 sm:px-8">Log In</h1>
                </button>
            }

        </nav>
    )
}
