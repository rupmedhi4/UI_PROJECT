import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 2,
      title: "Research and Strategy Development",
      description:
        "We will conduct thorough research and develop a customized strategy to help you achieve your business goals efficiently and effectively.",
    },
  ];

  return (
    <div className="gap-40px md:p-12   flex flex-col ">

      <div className=" w-[430px] h-[175px] md:pr-20  md:gap-0 md:text-left mb-12 md:w-[1440px] md:h-[51px] t-[1513px] flex flex-col md:flex-row  items-center ">

        <h2 className="bg-[#B9FF66] font-[500] rounded-md  md:text-4xl text-[#000000]  text-[36px] h-[47px] w-[212px] md:w-[360px] md:h-[51px] md:text-left  text-center">
          Our Working
          <span className="md:inline w-[153px] h-[47px] text-40 bg-[#B9FF66] font-[500] text-[36px]"> Process</span>
        </h2>


        <p className="text-[#000000] mt-[6rem] md:mt-0 md:ml-4 md:w-[292px]  font-[400] w-[250px] h-[48px] text-16">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>

      </div>



      <div className=" space-y-6 w-[392px] pl-4 md:pl-0 md:w-[1234px] h-[98px] md:h-[279px] gap-[30px] ">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`border ${activeIndex === index ? "bg-[#B9FF66] border-[#191A23]" : "bg-gray-100 border-[1px]   border-[#191A23]"} 
            rounded-[45px] p-6 shadow-md transition-all pt-[41px] pr-[60px] pl-[41px] pb-[60px]`}
            style={{
              boxShadow: "0px 5px 0px 0px #191A23",
            }}
          >

            {activeIndex === index && (
              <div className=" text-[16] mt-4 text-[14px]  md:w-[1114px]  md:h-[60px] text-sm md:text-base leading-relaxed">
                <div className="border-[1px] border-[#000000] md:w-[1114px]"></div>
                <p className="mt-4">{step.description}</p>
              </div>
            )}


            <div
              className="flex items-center justify-between cursor-pointer md:w-[1117px] md:pt-[41px] "
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            >

              <div className="flex items-center space-x-4">
                <span className={`text-2xl font-bold text-[#000000] text-[60px]`}>
                  0{step.id}
                </span>
                <span className={`text-lg font-medium text-[#000000] text-[30px]`}>
                  {step.title}
                </span>
              </div>


              <div
                className={`border border-[#191A23] w-[58px] h-[58px] bg-[#F3F3F3] flex items-center justify-center  rounded-full`}
              >
                {activeIndex === index ? (
                  <span className="text-lg font-bold border-b-2  text-[#191A23]">-</span>
                ) : (
                  <span className="text-[#191A23] text-lg font-bold">+</span>
                )}
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
