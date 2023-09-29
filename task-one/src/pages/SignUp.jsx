import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import google from "../assets/images/google.svg";
import facebook from "../assets/images/facebook.svg";

const SignUp = () => {
    return (
        <>
            <header className="mt-20 px-28">
                <nav>
                    <Link to="/" className="flex gap-2 items-center">
                        <img
                            className="h-10 w-10"
                            src={logo}
                            alt="help me out"
                        />
                        <span className="font-inter font-bold text-primaryLogo">
                            HelpMeOut
                        </span>
                    </Link>
                </nav>
            </header>

            <section className="grid place-items-center mt-6 mx-auto gap-8 w-[29.6rem] mb-5">
                <div className="font-inter">
                    <h1 className="text-center text-[2rem] font-bold text-headings tracking-[0.02rem] leading-[3rem] mb-2">
                        Log in or Sign up
                    </h1>
                    <p className="text-center text-[0.875rem] font-light tracking-[0.00875rem] leading-[1.3125] text-[#434343] max-w-xs">
                        Join millions of others in sharing successful moves on{" "}
                        {""}
                        <span className="font-normal text-headings">
                            HelpMeOut
                        </span>
                        .
                    </p>
                </div>
                <div className="flex flex-col gap-6 text-headings text-base font-inter font-medium tracking-[0.01rem] w-full">
                    <button className="inline-flex gap-4 py-[0.56rem] border border-headings px-[7rem] rounded-xl">
                        <img src={google} alt="google" />
                        Continue with Google
                    </button>
                    <button className="inline-flex gap-4 py-[0.56rem] border border-headings px-[7rem] rounded-xl mx-auto w-full">
                        <img src={facebook} alt="facebook" />
                        Continue with Facebook
                    </button>
                </div>

                <div className="flex items-center justify-between w-full">
                    <div className="bg-gray-400 border h-0.5 w-full"></div>
                    <p className="px-[0.62rem] text-[#B9C2C8] font-inter font-medium leading-[1.3125rem] tracking-[0.0875rem]">
                        or
                    </p>
                    <div className="bg-gray-400 border h-0.5 w-full"></div>
                </div>
                <form action="" className="w-full">
                    <div className="flex flex-col gap-2 mb-4">
                        <label
                            className="text-headings font-workSans font-medium text-[0.875rem] leading-normal"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="border border-[#B6B3C6] p-4 text-[#626262] font-medium rounded-xl outline-none focus:outline-none"
                            type="text"
                            id="email"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className="flex flex-col mb-8">
                        <label
                            className="text-headings font-workSans font-medium text-[0.875rem] leading-normal"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="border border-[#B6B3C6] p-4 text-[#626262] font-medium rounded-xl outline-none focus:outline-none"
                            type="password"
                            id="password"
                            placeholder="Enter your Password"
                        />
                    </div>
                    <button className="rounded-lg text-center px-5 py-4 bg-primary text-[#F9F9FF] font-workSans text-lg font-medium leading-normal w-full">
                        Sign Up
                    </button>
                </form>
            </section>
        </>
    );
};

export default SignUp;
