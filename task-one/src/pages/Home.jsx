import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";

const Home = () => {
    return (
        <>
            <Nav />
            <HeroSection />
            <div className="h-16 bg-[#F4F6F8]"></div>
            <Features />
        </>
    );
};

export default Home;
