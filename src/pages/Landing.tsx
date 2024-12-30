import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";

function LangingInterior()
{
    return (
        <div className="flex bg-zinc-950 justify-center">
            <div className="w-full 2xl:w-[100rem] p-5 sm:p-10">
                <h1 className="text-white text-[36px] px-20">Who is NebulousDev?</h1>
                <ProfileCard />
                <h1 className="text-white text-[36px] px-20">What can I do?</h1>
                <ProfileCard />
                <h1 className="text-white text-[36px] px-20">What have I done?</h1>
                <ProfileCard />
            </div>
        </div>
    )
}

export default function Landing() {
  return (
    <>
        <div className="h-max hidden lg:block">
            <Header showBg={false} showNav={false} below={true} disableLogoLink={true}/>
            <Hero />
            <Header showLogo={false} showLogin={false} disableAnim={true}/>
            {LangingInterior()}
            <Footer />
        </div>
        
        <div className="h-max block lg:hidden">
            <Header disableLogoLink={true}/>
            <Hero />
            {LangingInterior()}
            <Footer />
        </div>
    </>
  )
}
