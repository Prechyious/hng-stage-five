import circle from "../assets/images/record-circle.png";
import send from "../assets/images/send.svg";
import refreshSquare from "../assets/images/refresh-square.svg";
import vidRepo from "../assets/images/vidRepo.png";

const Features = () => {
    const features = [
        {
            id: 1,
            title: "Simple Screen Recording",
            desc: "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
            imgSrc: circle,
        },
        {
            id: 2,
            title: "Easy-to-Share URL",
            desc: "Share your recordings instantly with a single link. No attachments, no downloads.",
            imgSrc: send,
        },
        {
            id: 3,
            title: "Revisit Recordings",
            desc: "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
            imgSrc: refreshSquare,
        },
    ];
    return (
        <section className="mt-20 px-24 mb-20">
            <h2 className="text-headings text-center font-sora font-bold text-4xl mb-1">
                Features
            </h2>
            <p className="text-center font-workSans text-xl text-[#616163] mb-16">
                Key Highlights of Our Extension
            </p>
            <div className="grid grid-cols-2 gap-14">
                <div className="flex flex-col gap-12">
                    {features.map(({ id, title, desc, imgSrc }) => {
                        return (
                            <div className="flex items-start gap-6" key={id}>
                                <div className="bg-primary400 p-2 rounded-full flex items-center justify-center">
                                    <img src={imgSrc} alt={title} />
                                </div>
                                <div>
                                    <h3 className="font-inter font-semibold text-[1.75rem] text-purpleHeadings leading-7 mb-1">
                                        {title}
                                    </h3>
                                    <p className="font-workSans text-xl font-normal leading-7 text-[#616163]">
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <img src={vidRepo} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Features;
