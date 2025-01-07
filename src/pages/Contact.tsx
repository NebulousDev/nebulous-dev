import PageTemplate from "../components/PageTemplate";
import ProfileCard from "../components/ProfileCard";

export default function Contact({styleMode, setStyleMode}: any) {
  return (
    <PageTemplate styleMode={styleMode} setStyleMode={setStyleMode} >
      <h1 className="w-full text-white text-[36px] md:text-[80px] text-center mb-[3rem]">Contact</h1>
      <div className="bg-zinc-900 h-[100px] rounded-xl my-10 py-8">
        <h1 className="w-full h-full font-mono text-center text-white text-[24px]">Contact Form Coming Soon!</h1>
      </div>
      <ProfileCard styleMode={styleMode} />
    </PageTemplate>
  )
}
