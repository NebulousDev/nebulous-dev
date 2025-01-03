import { SVGBluesky, SVGEnvelope, SVGGithub, SVGHouse } from "./Icons";
import FadeButton from "./FadeButton";
import { useRef } from "react";
import { useIsVisible } from "./Visibility";

import profile_image from "../assets/totoro_square.png";

export default function ProfileCard() {

  const ref1 : any = useRef();
  const isVisible : boolean = useIsVisible(ref1);

  return (
    <div ref={ref1} className={`block lg:flex lg:flex-col-2 place-content-between bg-zinc-900 bg-gradient-to-br from-slate-800 to-zinc-950 rounded-xl text-center lg:text-left items-center pb-5 sm:p-5 lg:p-0 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <img className="object-cover sm:object-full w-full h-[200px] sm:w-[250px] sm:h-[250px] xl:w-[300px] xl:h-[300px] rounded-t-xl sm:rounded-xl xl:rounded-none xl:rounded-r-xl order-1 xl:order-2 sm:mx-auto sm:mt-5 lg:m-10 xl:m-0" src={profile_image}></img>
        <div className="order-2 xl:order-1 mx-5 lg:mr-10 xl:mx-10">
            <h1 className="font-mono text-white text-[24px] md:text-[36px] mt-5">Ben Ratcliff</h1>
            <h2 className="font-mono text-white text-[16px] font-medium mb-5">Computer Whiz | Software Developer | Enjoyer of nerdy things</h2>
            <p className="font-mono text-white text-[16px] my-5">I am a software developer with over a decade of personal experience and an insatiable desire to solve problems.</p>
            <div className="flex-auto h-[20px] xl:h-[40px]"></div>
            <div className="flex flex-row flex-wrap place-content-around gap-2 justify-center lg:justify-normal mb-5 lg:mb-10">
              <FadeButton linkPath="https://nebulous.dev/" extraClass="px-2 py-1">
                <SVGHouse className="fill-white w-5 mr-1 inline" /><a className="p-1 text-white align-text-top">nebulous.dev</a>
              </FadeButton>
              <FadeButton linkPath="https://github.com/NebulousDev" extraClass="px-2 py-1">
                <SVGGithub className="fill-white w-5 mr-1 inline" /><a className="p-1 text-white align-text-top">NebulousDev</a>
                </FadeButton>
              <FadeButton linkPath="https://bsky.app/profile/nebulous.dev" extraClass="px-2 py-1">
                <SVGBluesky className="fill-white w-5 mr-1 inline" /><a className="p-1 text-white align-text-top">@nebulous.dev</a>
              </FadeButton>
              <FadeButton linkPath="mailto:ben@nebulous.dev" extraClass="px-2 py-1">
                <SVGEnvelope className="fill-white w-5 mr-1 inline" /><a className="p-1 text-white align-text-top">ben@nebulous.dev</a>
              </FadeButton>
            </div>
        </div>
    </div>
  )
}