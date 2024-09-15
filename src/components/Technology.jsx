import { RiReactjsLine } from "react-icons/ri"
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiTailwindcss, SiMysql } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";


const Technology = () => {
    return (
        <div className="border-b border-neutral-900 pb-24">
            <h1 className="my-20 text-center text-4xl">Technology</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNextjsFill className="text-7xl"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-[#00bfff]"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoNodejs className="text-7xl text-green-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-white"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className="text-7xl text-cyan-600"/>
                </div>
            </div>
        </div>
    )
}

export default Technology