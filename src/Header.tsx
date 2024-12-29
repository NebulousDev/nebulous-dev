export default function Header({showBg=true, showLogo=true, showNav=true, showLogin=true, z=10}) {
    return (
        <nav className={`flex w-full p-2 sticky top-0 h-[3.25rem] sm:h-[3.5rem] z-${z} ${showBg ? "bg-black" : ""} pointer-events-none`}>

            {showLogo &&
                <button className="text-3xl sm:text-4xl mx-2 pointer-events-auto">
                    <a className="text-white font-mono">Nebulous</a>
                    <a className="text-[#5297FF] font-mono font-bold">Dev</a>
                </button>
            }

            <div className="flex-auto" />
            
            {showNav &&
                <div className="grid grid-cols-3 justify-center space-x-2 pointer-events-auto">
                    <button className="bg-[#5297FF] hover:bg-[#82e0ff] rounded-xl hover:underline decoration-slate-100 decoration-2 justify-center">
                        <h1 className="text-base sm:text-xl text-white font-mono px-6 sm:px-8">Projects</h1>
                    </button>
                    <button className="bg-[#5297FF] hover:bg-[#82e0ff] rounded-xl hover:underline decoration-slate-100 decoration-2 justify-center">
                        <h1 className="text-base sm:text-xl text-white font-mono px-6 sm:px-8">Blog</h1>
                    </button>
                    <button className="bg-[#5297FF] hover:bg-[#82e0ff] rounded-xl hover:underline decoration-slate-100 decoration-2 justify-center">
                        <h1 className="text-base sm:text-xl text-white font-mono px-6 sm:px-8">Contact</h1>
                    </button>
                </div>
            }

            <div className="flex-auto" />

            {showLogin &&
                <button className="bg-slate-800 hover:bg-[#82e0ff] rounded-xl hover:underline decoration-slate-100 decoration-2 justify-center pointer-events-auto">
                    <h1 className="text-base sm:text-xl text-white font-mono px-6 sm:px-8">Log In</h1>
                </button>
            }

        </nav>
    )
}
