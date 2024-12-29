import PageTemplate from "../components/PageTemplate";
import ProfileCard from "../components/ProfileCard";

export default function Blog() {
  return (
    <PageTemplate>
      <h1 className="w-full text-white text-[100px] text-center">Blog</h1>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </PageTemplate>
  )
}
