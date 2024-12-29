import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";

function LangingInterior()
{
    return (
        <div className="flex bg-zinc-950 justify-center">
            <div className="w-full 2xl:w-[100rem] p-10">
                <ProfileCard />
                <ProfileCard />
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
            <Header showLogo={false} showLogin={false}/>
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
