import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";
import SkillsCard from "../components/SkillsCard";
import { StyleMode } from "../components/StyleMode";

function LandingInterior(styleMode: StyleMode)
{
    let bgStyle = "";

    switch(styleMode)
    {
        case StyleMode.DARK_MODE:
            bgStyle = "bg-gradient-to-t from-black to-zinc-950";
            break;
        case StyleMode.LIGHT_MODE:
            bgStyle = "bg-gray-200";
            break;
    }

    return (
        <div className={`flex flex-col w-full place-items-center ${bgStyle} justify-center`}>
            <div className="w-full 2xl:w-[100rem] p-5 sm:p-10">
                <h1 className="text-white text-[36px] py-2"></h1>
                <ProfileCard styleMode={styleMode} />
                <h1 className="text-white text-[36px] py-5"></h1>
                <SkillsCard styleMode={styleMode} />
            </div>
        </div>
    )
}

export default function Landing({styleMode, setStyleMode}: any) {
  return (
    <>
        <div className="h-max hidden lg:block">
            <Header styleMode={styleMode} setStyleMode={setStyleMode} showBg={false} showNav={false} showMode={true} disableLogoLink={true} highZ={true}/>
            <Hero />
            <Header styleMode={styleMode} setStyleMode={setStyleMode} showLogo={false} showLogin={false} showMode={false} disableAnim={true}/>
            {LandingInterior(styleMode)}
            <Footer styleMode={styleMode}/>
        </div>
        
        <div className="h-max block lg:hidden">
            <Header styleMode={styleMode} setStyleMode={setStyleMode} disableLogoLink={true}/>
            <Hero />
            {LandingInterior(styleMode)}
            <Footer styleMode={styleMode}/>
        </div>
    </>
  )
}
