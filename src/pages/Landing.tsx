import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";
import SkillsCard from "../components/SkillsCard";

function LandingInterior()
{
    return (
        <div className="flex bg-gradient-to-br from-zinc-950 to-black justify-center">
            <div className="w-full 2xl:w-[100rem] p-5 sm:p-10">
                <h1 className="text-white text-[36px] px-20 py-5"></h1>
                <ProfileCard />
                <h1 className="text-white text-[36px] py-10"></h1>
                <SkillsCard />
                <h1 className="text-white text-[36px] px-20 py-10"></h1>
                <ProfileCard />
            </div>
        </div>
    )
}

export default function Landing() {
  return (
    <>
        <div className="h-max hidden lg:block">
            <Header showBg={false} showNav={false} below={true} disableLogoLink={true} highZ={true}/>
            <Hero />
            <Header showLogo={false} showLogin={false} disableAnim={true}/>
            {LandingInterior()}
            <Footer />
        </div>
        
        <div className="h-max block lg:hidden">
            <Header disableLogoLink={true}/>
            <Hero />
            {LandingInterior()}
            <Footer />
        </div>
    </>
  )
}
