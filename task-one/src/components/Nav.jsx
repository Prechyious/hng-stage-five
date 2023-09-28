import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Nav = () => {
    return (
        <nav className="text-base flex items-center justify-between py-3 px-24 border-b">
            <Link to="/" className="flex gap-2 items-center">
                <img className="h-10 w-10" src={logo} alt="help me out" />
                <span className="font-inter font-bold text-primaryLogo">
                    HelpMeOut
                </span>
            </Link>

            <div className="font-workSans text-black font-medium space-x-10">
                <NavLink>Features</NavLink>
                <NavLink>How It Works</NavLink>
            </div>

            <Link to="" className="font-sora font-bold text-lg text-primary">
                Get Started
            </Link>
        </nav>
    );
};

export default Nav;
