import React from "react";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between sm:px-6 md:px-16  bg-white text-gray-900">
            <div className="w-[95%] md:w-1/2 px-4 md:px-8">
                <div className="mb-6">
                    <h1 className="text-4xl sm:text-9xl md:text-5xl font-bold mb-4 leading-snug md:leading-[4rem] w-full text-left sm:text-left">
                        Navigating the <br />
                        digital landscape <br />
                        for success
                    </h1>

                    <div className="w-[80%] sm:w-full md:w-1/2 md:hidden">
                        <img
                            src="./hero.png"
                            alt="Digital Marketing Illustration"
                            className="w-full h-auto mx-auto"
                        />
                    </div>

                </div>

                <p className="text-base  md:text-lg mb-4 text-gray-700 leading-relaxed w-[90%] sm:w-[90%] md:w-auto mx-auto md:mx-0">
                    Our digital marketing agency helps businesses <br />
                    grow and succeed online through a range of<br />
                    services including SEO, PPC, social media <br />
                    marketing,and content creation.
                </p>

                <button className="w-[96%] rounded-lg md:w-auto px-6 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition duration-300 mx-auto md:mx-0">
                    Book a consultation
                </button>
            </div>

            <div className="w-[90%] md:w-1/2 flex justify-center md:justify-start hidden sm:block px-4 md:px-8">
                <img
                    src="./hero.png"
                    alt="Digital Marketing Illustration"
                    className="w-[100%] h-auto"
                />
            </div>
        </section>
    );
};

export default Hero;
