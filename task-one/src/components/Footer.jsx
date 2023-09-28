import { Link, NavLink } from "react-router-dom";
import logoWhite from "../assets/images/logoWhite.svg";

const Footer = () => {
    return (
        <footer className="bg-primary text-white px-[8.12rem] py-[6.12rem] flex gap-[15.97rem]">
            <div>
                <Link
                    to="/"
                    className="font-inter text-base font-bold flex items-center gap-2"
                >
                    <img src={logoWhite} alt="Help Me Out" />
                    <span>HelpMeOut</span>
                </Link>
            </div>
            <nav className="flex gap-[11.75rem]">
                <div className="flex flex-col gap-6">
                    <h4 className="font-sora text-base font-semibold">Menu</h4>
                    <NavLink to="/">Home</NavLink>
                    <NavLink> Converter</NavLink>
                    <NavLink>How it Works</NavLink>
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="font-sora text-base font-semibold">
                        About Us
                    </h4>
                    <NavLink>About</NavLink>
                    <NavLink> Contact Us</NavLink>
                    <NavLink>Privacy Policy</NavLink>
                </div>
                <div className="flex flex-col gap-6 text-base font-normal leading-normal">
                    <h4 className="font-sora text-base font-semibold">
                        Screen Record
                    </h4>
                    <NavLink>Browser Window</NavLink>
                    <NavLink> Desktop</NavLink>
                    <NavLink>Application</NavLink>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
