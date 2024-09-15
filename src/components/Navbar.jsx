import logo from "../assets/akashL.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaMediumM } from "react-icons/fa"

const Navbar = () => {
    return (
        <nab className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="" className="mx-2 h-20 w-20"/>
            </div>

            <div className="m-8 flex items-center justify-center gap-4">
                <a target="_blank" href={"https://www.linkedin.com/in/nmakash/"}>
                    <FaLinkedin/>
                </a>
                <a target="_blank" href="https://github.com/mdakashsheikh">
                    <FaGithub/>
                </a>
                <a target="_blank" href="#">
                    <FaTwitter/>
                </a>
                <a target="_blank" href="https://medium.com/@nmakashsheikh">
                    <FaMediumM/>
                </a>
            </div>
        </nab>
    )
}

export default Navbar