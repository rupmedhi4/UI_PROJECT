import React, { useState } from "react";

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            designation: "Marketing Director at XYZ Corp",
        },
        {
            text: "Working with Positivus has been a game-changer. Their strategies have significantly improved our online presence, and the results have exceeded our expectations. Their professionalism and dedication make them a standout team.",
            name: "Jane Doe",
            designation: "CEO at ABC Ltd.",
        },
        {
            text: "The Positivus team has a unique approach to digital marketing. Their expertise helped us achieve new milestones in our business growth. They are always available to support and provide tailored solutions.",
            name: "Robert Brown",
            designation: "Founder of Startup Inc.",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className=" text-white md:py-16 px-4  md:mt-[10rem] mt-[20rem] md:px-20">
            <div className="text-center pr-20 pl-10 md:pr-0 md:pl-0 md:w-[1440px] w-[430px] md:h-[51px] h-[148px] md:pl-100 md:pr-100  md:gap-0 md:text-left mb-12   md:t-[1513px] flex flex-col md:flex-row  items-center ">

                <h2 className="bg-[#B9FF66] font-[500] rounded-md  md:text-4xl text-[#000000]  text-[36px] h-[47px] w-[205px]  md:h-[51px] md:text-left  text-center">
                    Testimonials

                </h2>


                <p className="text-[#000000] pt-8 md:pt-0 text-center md:text-left  md:mt-0 md:ml-4 md:w-[473px]  font-[400] w-[390px] h-[72px] md:h-[46px] text-16">
                    Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                </p>

            </div>



            <div className="bg-[#191A23]  md:w-[1240px] md:h-[625px]  md:pl-100 rounded-[45px]  flex flex-col items-center mx-auto">

                <div className=" bg-[#1E242B] mt-[8%] md:items-center md:text-center md:p-8 rounded-[45px] md:h-[266px] pt-6 md:pt-2 md:w-[606px] w-[330px] h-[390px] shadow-lg  border border-[#B9FF66]">

                    <p className=" md:text-xl w-[270px] md:w-[502px] h-[240px] md:h-[138px] pt-[8px] md:pl-[52px] font-[400] text-[16] md:leading-relaxed text-[#FFFFFF] pl-[60px] text-left md:text-center"  >
                        "{testimonials[currentSlide].text}"
                    </p>
                </div>
                <div className="md:w-[526px] w-[251px] md:h-[49px] h-[43px] mt-6 ml-12">
                    <p className=" font-[500] text-[20px]">{testimonials[currentSlide].name}</p>
                    <p className="font-[400] text-[18px]">{testimonials[currentSlide].designation}</p>

                </div>


                <div className="flex justify-between items-center w-full md:mt-6 mt-12 px-6 pr-4 pl-4 pb-8 md:pr-0 md:pl-0 md:pb-0">

                    <button
                        onClick={prevSlide}
                        className="bg-[#B9FF66] text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-green-400"
                    >
                        &#8249;
                    </button>

                    <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-[#B9FF66]" : "bg-gray-500"
                                    }`}
                            ></div>
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="bg-[#B9FF66] text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-green-400"
                    >
                        &#8250;
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Testimonials;
