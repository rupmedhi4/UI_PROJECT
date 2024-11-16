import React from "react";
import ServiceCard from "./ServiceCard";

const Features = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8 flex flex-col lg:flex-row md:px-20 gap-4 lg:gap-8">
        <div className="flex justify-center items-center">
          <span
            className="text-2xl font-bold bg-[#B9FF66] rounded-md w-[110px] h-[37px] flex justify-center items-center"
          >
            Services
          </span>
        </div>

        <div className="text-center font-weight:400 text-gray-700 gap-40 lg:text-left">
          <span className="font-size:[16px] lg:block">
            At our digital marketing agency, we offer a range of services to
          </span>
          <span className="font-size:[16px]">
            help businesses grow and succeed online. These services include:
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <ServiceCard
          title1="Search engine"
          title2="optimization"
          bgColor="bg-[#F3F3F3]"
          bgColorText="bg-[#B9FF66]"
          textColor="text-gray-900"
          image="/card1.png"
        />

        <ServiceCard
          title1="Pay-per-click "
          title2="advertising"
          bgColor="bg-lime-200"
          textColor="text-lime-600"
          image="/card2.png"
        />
      </div>
    </section>
  );
};

export default Features;
