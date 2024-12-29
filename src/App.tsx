import Header from "./Header";
import Hero from "./Hero";
import ProfileCard from "./ProfileCard";

export default function App() {
  return (
    <>
      <Header showBg={false} showNav={false} z={10}/>
      <Hero />
      <Header showLogo={false} showLogin={false} z={20}/>
      <div className="flex bg-zinc-950 justify-center">
        <div className="w-full 2xl:w-[100rem] p-10">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </>
  );
}