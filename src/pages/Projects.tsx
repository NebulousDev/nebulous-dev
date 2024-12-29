import PageTemplate from "../components/PageTemplate";
import ProfileCard from "../components/ProfileCard";

export default function Projects() {
  return (
    <PageTemplate>
      <h1 className="w-full text-white text-[100px] text-center">Projects</h1>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </PageTemplate>
  )
}
