import profile_image from "../assets/totoro_square.png";

export default function ProfileCard() {
  return (
    <div className="flex flex-col-2 m-10">
        <img className="w-[400px] h-[400px]" src={profile_image}></img>
        <div className="flex-auto bg-slate-800">
            <h1>Ben Ratcliff</h1>
        </div>
    </div>
  )
}
