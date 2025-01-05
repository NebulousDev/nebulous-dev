import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useIsVisible } from './Visibility';

import c_image from "../assets/icons8-c-programming.svg"
import cpp_image from "../assets/icons8-c++.svg"
import csharp_image from "../assets/C-CSharp.svg"
import x86_image from "../assets/os-x86-svgrepo-com.svg"
import python_image from "../assets/icons8-python.svg"
import java_image from "../assets/icons8-java.svg"
import javascript_image from "../assets/icons8-javascript.svg"
import typescript_image from "../assets/icons8-typescript.svg"
import opengl_image from "../assets/Opengl-logo.svg"
import vulkan_image from "../assets/Vulkan_logo.svg"
import winapi_image from "../assets/Windows_logo_-_2012_flags_blue.svg.png"
import html_image from "../assets/icons8-html-logo.svg"
import css_image from "../assets/icons8-css-logo.svg"
import node_image from "../assets/nodejs-1-logo-svgrepo-com.svg"
import react_image from "../assets/react.svg"
import vite_image from "../assets/vite.svg"
import tailwind_image from "../assets/icons8-tailwindcss.svg"
import mysql_image from "../assets/mysql-logo-svgrepo-com.svg"
import batch_image from "../assets/bat-file-icon.svg"
import bash_image from "../assets/bash_full_colored_dark.svg"

import windows_image from "../assets/Windows_logo_-_2012.svg"
import linux_image from "../assets/Tux.svg"
import github_image from "../assets/github-brands-solid.svg"
import gitlab_image from "../assets/gitlab-logo-500.svg"
import docker_image from "../assets/docker-mark-blue.svg"
import visual_studio_image from "../assets/icons8-visual-studio.svg"
import visual_code_image from "../assets/icons8-visual-studio-code-2019.svg"
import eclipse_image from "../assets/Eclipse IDE.svg"
import notepadpp_image from "../assets/icons8-notepad++.svg"
import cmake_image from "../assets/CMake.svg"
import gradle_image from "../assets/gradle-svgrepo-com.svg"
import proxmox_image from "../assets/proxmox.com.svg"
import truenas_image from "../assets/truenas.png"
import digital_ocean_image from "../assets/digital-ocean-svgrepo-com.svg"
import traefik_image from "../assets/Traefik Proxy.svg"
import nginx_image from "../assets/NGINX.svg"
import wireguard_image from "../assets/wireguard.svg"

import unity_image from "../assets/icons8-unity.svg"
import blender_image from "../assets/blender_icon_64x64.png"
import affinity_designer_image from "../assets/Affinity_Designer_2-logo.svg"
import figma_image from "../assets/Figma-logo.svg"
import davinci_resolve_image from "../assets/DaVinci_Resolve_17_logo.svg"
import obs_image from "../assets/OBS_Studio_Logo.svg"
import audacity_image from "../assets/Audacity_Logo.svg"
import vlc_image from "../assets/VLC_Icon.svg"
import avisynth_image from "../assets/Avisynth-logo.png"
import virtualdub_image from "../assets/VirtualDub_Logo.svg"
import ffmpeg_image from "../assets/FFmpeg_icon.svg"
import google_image from "../assets/icons8-google.svg"
import office_image from "../assets/Microsoft_Office_logo_(2013–2019).svg"

import json_image from "../assets/JSON_vector_logo.svg"
import xml_image from "../assets/xml-svgrepo-com.svg"
import obj_image from "../assets/obj-file-format-variant-svgrepo-com.svg"
import gltf_image from "../assets/GlTF_logo.svg"

import en_text_image from "../assets/textformat-svgrepo-com.svg"
import jp_text_image from "../assets/Japanese_Hiragana_kyokashotai_A.svg"

function SkillItem({skillName="Unknown", imgPath="", linkPath="", extraImgClass="", wide=false}: any)
{
    const ref1 : any = useRef();
    const isVisible : boolean = useIsVisible(ref1);

    return (
        <Link to={linkPath} className={`group flex flex-col gap-0 mx-auto mb-1 sm:mb-2 transition-opacity ease-in duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div ref={ref1} className={`w-fit h-fit duration-200 bg-slate-800 group-hover:bg-nebdev rounded-lg justify-center mx-auto p-4`}>
                <img src={imgPath} className={`w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] mx-auto ${extraImgClass}`}/>
            </div>
            <a className={`w-full h-min ${wide ? 'w-[100px] md:w-[300px]' : 'sm:max-w-[100px]'} py-1 sm:py-2 mx-auto font-mono text-white text-bold text-center transition-colors group-hover:font-medium duration-200`}>{skillName}</a>
        </Link>
    )
}

export default function SkillsCard() {

    const ref1 : any = useRef();
    const isVisible : boolean = useIsVisible(ref1);

    return (
        <div ref={ref1} className={`bg-gradient-to-br from-slate-800 to-zinc-900 rounded-xl h-min transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

            <h1 className="w-full font-mono text-[24px] sm:text-[30px] text-white text-center p-2 sm:p-5">Code Skills</h1>
            <div className="w-full flex flex-col justify-between justify-items-center items-center bg-zinc-transparent h-min p-2">
                <h2 className="w-full text-white text-center text-[24px] mt-5"> Software & Scripting Languages: </h2>
                <h3 className="w-full text-zinc-300 text-center text-[18px] mt-2"> Languages I have used for full projects </h3>
                <div className="w-fit grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 pt-10 px-2 lg:px-0">
                    <SkillItem skillName="C" imgPath={c_image} linkPath="https://en.wikipedia.org/wiki/C_(programming_language)"/>
                    <SkillItem skillName="C++" imgPath={cpp_image} linkPath="https://en.wikipedia.org/wiki/C%2B%2B"/>
                    <SkillItem skillName="C#" imgPath={csharp_image} linkPath="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"/>
                    <SkillItem skillName="x86-64 ASM" imgPath={x86_image} linkPath="https://en.wikipedia.org/wiki/X86-64"/>
                    <SkillItem skillName="Python" imgPath={python_image} linkPath="https://www.python.org/"/>
                    <SkillItem skillName="Java" imgPath={java_image} linkPath="https://react.dev/"/>
                    <SkillItem skillName="JavaScript" imgPath={javascript_image} linkPath="https://www.javascript.com/"/>
                    <SkillItem skillName="TypeScript" imgPath={typescript_image} linkPath="https://www.typescriptlang.org/"/>
                    <SkillItem skillName="HTML" imgPath={html_image} linkPath="https://en.wikipedia.org/wiki/HTML"/>
                    <SkillItem skillName="CSS" imgPath={css_image} linkPath="https://en.wikipedia.org/wiki/CSS"/>
                </div>
                <h2 className="w-full text-white text-center text-[24px] mt-5"> Frameworks & Libraries: </h2>
                <h3 className="w-full text-zinc-300 text-center text-[18px] mt-2"> Libraries I have used for full projects </h3>
                <div className="w-fit grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 pt-10 px-2 lg:px-0">
                    <SkillItem skillName="OpenGL" imgPath={opengl_image} linkPath="https://www.opengl.org/"/>
                    <SkillItem skillName="Vulkan" imgPath={vulkan_image} linkPath="https://www.vulkan.org/"/>
                    <SkillItem skillName="WinAPI" imgPath={winapi_image} linkPath="https://en.wikipedia.org/wiki/Windows_API" extraImgClass="p-2 object-scale-down"/> 
                    <SkillItem skillName="MySQL" imgPath={mysql_image} linkPath="https://www.mysql.com/"/>
                    <SkillItem skillName="NodeJS" imgPath={node_image} linkPath="https://nodejs.org/"/>
                    <SkillItem skillName="React" imgPath={react_image} linkPath="https://react.dev/"/>
                    <SkillItem skillName="Vite" imgPath={vite_image} linkPath="https://vite.dev/"/>
                    <SkillItem skillName="Tailwind" imgPath={tailwind_image} linkPath="https://tailwindcss.com/"/>
                </div>
                <h2 className="w-full text-white text-center text-[24px] mt-5"> Containers: </h2>
                <h3 className="w-full text-zinc-300 text-center text-[18px] mt-2"> Containers I have written parsers for </h3>
                <div className="w-fit grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 pt-10 pb-10 px-2 lg:px-0">
                    <SkillItem skillName="JSON" imgPath={json_image} linkPath="https://www.json.org/json-en.html" extraImgClass="p-2 object-scale-down"/>
                    <SkillItem skillName="XML" imgPath={xml_image} linkPath="https://en.wikipedia.org/wiki/XML"/>
                    <SkillItem skillName="OBJ" imgPath={obj_image} linkPath="https://en.wikipedia.org/wiki/Wavefront_.obj_file"/>
                    <SkillItem skillName="GLTF" imgPath={gltf_image} linkPath="https://www.khronos.org/Gltf"/>
                </div>
            </div>

            <h1 className="w-full font-mono text-[24px] sm:text-[30px] text-white text-center p-2 sm:p-5">Tools Skills</h1>
            <div className="w-full flex flex-col justify-between justify-items-center items-center bg-zinc-transparent h-min p-2">
                <h2 className="w-full text-white text-center text-[24px] mt-5"> Build & Repository: </h2>
                <h3 className="w-full text-zinc-300 text-center text-[18px] mt-2"> Build systems, deployment, and code management tools </h3>
                <div className="w-fit grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 pt-10 px-2 lg:px-0">
                    <SkillItem skillName="CMake" imgPath={cmake_image} linkPath="https://cmake.org/"/>
                    <SkillItem skillName="Gradle" imgPath={gradle_image} linkPath="https://gradle.org/"/>
                    <SkillItem skillName="GitHub" imgPath={github_image} linkPath="https://github.com/"/>
                    <SkillItem skillName="GitLab" imgPath={gitlab_image} linkPath="https://about.gitlab.com/gt"/>
                    <SkillItem skillName="Docker" imgPath={docker_image} linkPath="https://www.docker.com/"/>
                    <SkillItem skillName="Digital Ocean" imgPath={digital_ocean_image} linkPath="https://www.digitalocean.com/"/>
                </div>
                <h2 className="w-full text-white text-center text-[24px] mt-5"> Development Environments (IDEs): </h2>
                <h3 className="w-full text-zinc-300 text-center text-[18px] mt-2"> Integrated development environments </h3>
                <div className="w-fit grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 pt-10 px-2 lg:px-0">
                    <SkillItem skillName="Visual Studio" imgPath={visual_studio_image} linkPath="https://visualstudio.microsoft.com/"/>
                    <SkillItem skillName="Visual Code" imgPath={visual_code_image} linkPath="https://code.visualstudio.com/"/>
                    <SkillItem skillName="Eclipse" imgPath={eclipse_image} linkPath="https://eclipseide.org/"/>
                </div>
                <h2 className="w-full text-white text-center text-[24px] mt-5"> IT / Server: </h2>
                <h3 className="w-full text-zinc-300 text-center text-[18px] mt-2"> Server and network software tools </h3>
                <div className="w-fit grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 pt-10 px-2 lg:px-0">
                    <SkillItem skillName="TrueNAS" imgPath={truenas_image} linkPath="https://www.truenas.com/"/>
                    <SkillItem skillName="Proxmox" imgPath={proxmox_image} linkPath="https://www.proxmox.com/en/"/>
                    <SkillItem skillName="Treafik" imgPath={traefik_image} linkPath="https://traefik.io/traefik/"/>
                    <SkillItem skillName="NGINX" imgPath={nginx_image} linkPath="https://nginx.org/"/> 
                    <SkillItem skillName="WireGuard" imgPath={wireguard_image} linkPath="https://www.wireguard.com/"/>
                </div>
                <h2 className="w-full text-white text-center text-[24px] mt-5"> General: </h2>
                <h3 className="w-full text-zinc-300 text-center text-[18px] mt-2"> Operating systems and other development-adjacent tools </h3>
                <div className="w-fit grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 pt-10 pb-10 px-2 lg:px-0">
                    <SkillItem skillName="Windows" imgPath={windows_image} linkPath="https://www.microsoft.com/en-us/windows"/>
                    <SkillItem skillName="GNU/Linix" imgPath={linux_image} linkPath="https://www.linux.org/"/>
                    <SkillItem skillName="Notepad++" imgPath={notepadpp_image} linkPath="https://notepad-plus-plus.org/"/>
                    <SkillItem skillName="Batch" imgPath={batch_image} linkPath="https://en.wikipedia.org/wiki/Batch_file"/>
                    <SkillItem skillName="Bash" imgPath={bash_image} linkPath="https://en.wikipedia.org/wiki/Bash_(Unix_shell)"/>
                </div>
            </div>

            <h1 className="w-full font-mono text-[24px] sm:text-[30px] text-white text-center p-2 sm:p-5">Additional Skills</h1>
            <div className="w-full flex flex-col justify-between justify-items-center items-center bg-zinc-transparent h-min p-2">
                <h2 className="w-full text-white text-center text-[24px] mt-5"> Graphics / Game Development: </h2>
                <h3 className="w-full text-zinc-300 text-center text-[18px] mt-2"> Computer graphics, game development, and design tools </h3>
                <div className="w-fit grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 pt-10 px-2 lg:px-0">
                    <SkillItem skillName="Unity" imgPath={unity_image} linkPath="https://unity.com/"/>
                    <SkillItem skillName="Blender" imgPath={blender_image} linkPath="https://www.blender.org/"/>
                    <SkillItem skillName="Affinity Designer" imgPath={affinity_designer_image} linkPath="https://affinity.serif.com/en-us/designer/"/>
                    <SkillItem skillName="Figma" imgPath={figma_image} linkPath="https://www.figma.com/"/>
                </div>
                <h2 className="w-full text-white text-center text-[24px] mt-5"> AV Editing: </h2>
                <h3 className="w-full text-zinc-300 text-center text-[18px] mt-2"> Video, audio, and restoration tools </h3>
                <div className="w-fit grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 pt-10 px-2 lg:px-0">
                    <SkillItem skillName="DaVinci Resolve" imgPath={davinci_resolve_image} linkPath="https://www.blackmagicdesign.com/products/davinciresolve"/>
                    <SkillItem skillName="OBS" imgPath={obs_image} linkPath="https://obsproject.com/"/>
                    <SkillItem skillName="Audacity" imgPath={audacity_image} linkPath="https://www.audacityteam.org/"/>
                    <SkillItem skillName="VLC" imgPath={vlc_image} linkPath="https://www.videolan.org/"/>
                    <SkillItem skillName="AviSynth" imgPath={avisynth_image} linkPath="http://avisynth.nl/index.php/Main_Page"/>
                    <SkillItem skillName="VirtualDub" imgPath={virtualdub_image} linkPath="https://www.virtualdub.org/"/>
                    <SkillItem skillName="FFmpeg" imgPath={ffmpeg_image} linkPath="https://www.ffmpeg.org/"/>
                </div>
                <h2 className="w-full text-white text-center text-[24px] mt-5"> Workplace: </h2>
                <h3 className="w-full text-zinc-300 text-center text-[18px] mt-2"> Word processing and professional workplace tools </h3>
                <div className="w-fit grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 pt-10 pb-10 px-2 lg:px-0">
                    <SkillItem skillName="Google Workspace" imgPath={google_image} linkPath="https://workspace.google.com/"/>
                    <SkillItem skillName="Microsoft Office" imgPath={office_image} linkPath="https://www.office.com/"/>
                </div>
            </div>

            <h1 className="w-full font-mono text-[24px] sm:text-[30px] text-white text-center p-2 sm:p-5">Human Languages</h1>
            <div className="w-full flex flex-col justify-between justify-items-center items-center bg-zinc-transparent h-min p-2">
                <div className="w-fit flex flex-cols-2 gap-2 pt-10 pb-10 px-2 lg:px-0">
                    <SkillItem skillName="English (Native)" imgPath={en_text_image} linkPath="" wide={true}/>
                    <SkillItem skillName="Japanese (N4)" imgPath={jp_text_image} linkPath="" wide={true}/>
                </div>
            </div>
            <h1 className="w-full font-mono text-[24px] sm:text-[30px] text-white text-center p-5"></h1>

        </div>
    )
}
