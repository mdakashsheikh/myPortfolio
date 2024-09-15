import { RiReactjsLine } from "react-icons/ri"
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiTailwindcss, SiMysql } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVarients = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technology = () => {
    return (
        <div className="border-b border-neutral-900 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technology
            </motion.h1>
            <motion.div
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: -100 }}
                 transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    variants={iconVarients(2.5)}
                    initial="initail"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                    variants={iconVarients(3)}
                    initial="initail"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <RiNextjsFill className="text-7xl"/>
                </motion.div>
                <motion.div
                    variants={iconVarients(5)}
                    initial="initail"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiMongodb className="text-7xl text-green-600"/>
                </motion.div>
                <motion.div
                    variants={iconVarients(2)}
                    initial="initail"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiMysql className="text-7xl text-[#00bfff]"/>
                </motion.div>
                <motion.div
                    variants={iconVarients(6)}
                    initial="initail"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <IoLogoNodejs className="text-7xl text-green-600"/>
                </motion.div>
                <motion.div
                    variants={iconVarients(4)}
                    initial="initail"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiExpress className="text-7xl text-white"/>
                </motion.div>
                <motion.div
                    variants={iconVarients(2.5)}
                    initial="initail"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiTailwindcss className="text-7xl text-cyan-600"/>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technology