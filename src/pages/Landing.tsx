import Header from "../components/Header";
import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";

export default function Landing() {
  return (
    <>
        <Header showBg={false} showNav={false} below={true} disableLogoLink={true}/>
        <Hero />
        <Header showLogo={false} showLogin={false}/>
        <div className="flex bg-zinc-950 justify-center">
            <div className="w-full 2xl:w-[100rem] p-10">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
        </div>
    </>
  )
}
