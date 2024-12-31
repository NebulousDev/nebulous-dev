import profile_image from "../assets/totoro_square.png";

import github_ico from "../assets/github-brands-solid.svg"
import webpage_ico from "../assets/house-solid.svg"
import bluesky_ico from "../assets/bluesky-brands-solid.svg"
import email_ico from "../assets/envelope-solid.svg"
import { Link } from "react-router-dom";

export default function ProfileCard() {
  return (
    <div className="block lg:flex lg:flex-col-2 place-content-between bg-zinc-800 rounded-xl text-center lg:text-left items-center pb-5 sm:p-5 lg:p-0">
        <img className="object-cover sm:object-full w-full h-[200px] sm:w-[250px] sm:h-[250px] xl:w-[300px] xl:h-[300px] rounded-t-xl sm:rounded-xl xl:rounded-none xl:rounded-r-xl order-1 xl:order-2 sm:mx-auto sm:mt-5 lg:m-10 xl:m-0" src={profile_image}></img>
        <div className="order-2 xl:order-1 mx-5 lg:mr-10 xl:mx-10">
            <h1 className="font-mono text-white text-[24px] md:text-[36px] mt-5">Ben Ratcliff</h1>
            <h2 className="font-mono text-white text-[16px] font-medium mb-5">Computer Whiz | Software Developer | Enjoyer of nerdy things</h2>
            <p className="font-mono text-white text-[16px] my-5">I am a software developer with over a decade of personal experience and an insatiable desire to solve problems.</p>
            <div className="flex-auto h-[20px] xl:h-[40px]"></div>
            <div className="flex flex-row flex-wrap place-content-around gap-2 justify-center lg:justify-normal mb-5 lg:mb-10">
              <Link to="https://nebulous.dev/" className="bg-zinc-700 rounded-lg px-2 py-1 hover:bg-[#5297FF] text-[#5297FF] hover:text-white hover:font-medium hover:scale-[102%]">
                <img src={webpage_ico} className="w-5 h-6 mr-1 inline"/><a className="p-1 align-text-top">nebulous.dev</a>
              </Link>
              <Link to="https://github.com/NebulousDev" className="bg-zinc-700 rounded-lg px-2 py-1 hover:bg-[#5297FF] text-[#5297FF] hover:text-white hover:font-medium hover:scale-[102%]">
                <img src={github_ico} className="w-5 h-6 mr-1 inline"/><a className="p-1 align-text-top">NebulousDev</a>
              </Link>
              <Link to="https://bsky.app/profile/nebulous.dev" className="bg-zinc-700 rounded-lg px-2 py-1 hover:bg-[#5297FF] text-[#5297FF] hover:text-white hover:font-medium hover:scale-[102%]">
                <img src={bluesky_ico} className="w-5 h-6 mr-1 inline"/><a className="p-1 align-text-top">@nebulous.dev</a>
              </Link>
              <Link to="mailto:ben@nebulous.dev" className="bg-zinc-700 rounded-lg px-2 py-1 hover:bg-[#5297FF] text-[#5297FF] hover:text-white hover:font-medium hover:scale-[102%]">
                <img src={email_ico} className="w-5 h-6 mr-1 inline"/><a className="p-1 align-text-top">ben@nebulous.dev</a>
              </Link>
            </div>
        </div>
    </div>
  )
}

// p-0 sm:p-10 md:p-0
// min-[1190px]
// min-[916px]