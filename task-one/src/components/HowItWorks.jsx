import gallery from "../assets/images/gallery.svg";

const HowItWorks = () => {
    const howItWorks = [
        {
            id: 1,
            title: "Record Screen",
            desc: 'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
            imgSrc: gallery,
        },
        {
            id: 2,
            title: "Share Your Recording",
            desc: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
            imgSrc: gallery,
        },
        {
            id: 3,
            title: "Learn Effortlessly",
            desc: "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
            imgSrc: gallery,
        },
    ];

    return (
        <section className="mt-20 px-24 mb-[7.38rem]">
            <h2 className="text-headings text-center font-sora font-bold text-4xl mb-[3.69rem]">
                How It Works
            </h2>

            <div className="grid grid-cols-3 gap-20 place-items-center">
                {howItWorks.map(({ id, title, desc, imgSrc }) => {
                    return (
                        <div
                            className="flex flex-col items-center text-center gap-8"
                            key={id}
                        >
                            <div className="w-[4.2rem] h-[4.18rem] flex items-center justify-center rounded-full text-white bg-primary">
                                <p className="font-inter text-[2rem] font-bold">
                                    {id}
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="font-inter text-[1.75rem] font-semibold text-purpleHeadings">
                                    {title}
                                </h3>
                                <p className="font-workSans text-xl font-normal text-[#616163] leading-7">
                                    {desc}
                                </p>
                            </div>

                            <div>
                                <img src={imgSrc} alt={title} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HowItWorks;
