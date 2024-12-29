import bg_image from "../assets/temp-bg.png";

export default function Hero() {
    return (
        <>
            <div className="w-full h-screen fixed top-0 -z-10">
                <img className="object-cover object-center w-full h-full" src={bg_image}></img>
            </div>
            <div className="w-full h-[calc(100vh-6.5rem)] sm:h-[calc(100vh-3.5rem)] text-center flex items-center justify-center">
                <div className="mt-[-200px]">
                    <h1 className="text-[#5297FF] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-mono font-bold md:mb-[-15px] lg:mb-[-25px] lg:mr-[650px]">I AM A</h1>
                    <h1 className="text-white text-[40px] sm:text-[60px] md:text-[75px] lg:text-[100px] font-mono font-bold">Game Developer</h1>
                </div>
            </div>
        </>
    )
}
