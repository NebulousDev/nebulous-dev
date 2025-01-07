import PageTemplate from "../components/PageTemplate";
import ProfileCard from "../components/ProfileCard";

export default function Projects({styleMode, setStyleMode}: any) {
  return (
    <PageTemplate styleMode={styleMode} setStyleMode={setStyleMode}>
      <h1 className="w-full text-white text-[36px] md:text-[100px] text-center">Projects</h1>
      <ProfileCard styleMode={styleMode} />
      <ProfileCard styleMode={styleMode} />
      <ProfileCard styleMode={styleMode} />
    </PageTemplate>
  )
}
