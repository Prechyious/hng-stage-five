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

            <section className="grid place-items-center gap-8">
                <div className="mt-12 font-inter">
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
                <div className="flex flex-col gap-6 text-headings text-base font-inter font-medium tracking-[0.01rem]">
                    <button className="inline-flex gap-4 py-[0.56rem] border border-headings px-[8rem] rounded-xl">
                        <img src={google} alt="google" />
                        Continue with Google
                    </button>
                    <button className="inline-flex gap-4 py-[0.56rem] border border-headings px-[8rem] rounded-xl">
                        <img src={facebook} alt="facebook" />
                        Continue with Facebook
                    </button>
                </div>

                <p>or</p>
                <form action=""></form>
            </section>
        </>
    );
};

export default SignUp;
