import React from "react";

const ServiceCard = ({ title1, title2, bgColor, textColor, icon, image, bgColorText }) => {
  return (
    <div
      className={`   ${bgColor} rounded-[45px] p-[50px] shadow-lg border border-gray-900 flex w-[345px] md:w-full
       md:max-w-[600px] h-auto`}
      style={{
        boxShadow: "0px 5px 0px 0px #191A23",
      }}
    >
      <div className="flex-1">
        <h3
          className={` text-2xl  lg:text-3xl font-semibold ${textColor} 
              px-[7px] rounded-tl-md whitespace-nowrap`}
        >
          <span className={`${bgColorText}`}>{title1}</span>
          <br />
          <span className={`${bgColorText}`}>{title2}</span>
        </h3>


        <button className={`flex items-center ${textColor} font-medium mt-10 mt-28`}>
          <div className="w-7 h-7 flex items-center justify-center bg-black rounded-full gap-[15px]">
            <span className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 h-4 fill-current"
                aria-hidden="true"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </span>
          </div>
          <span className="ml-4 hidden sm:inline">Learn more</span>
        </button>
      </div>
      {image && (
        <div className="mt-14 w-[150px] md:mt-4 md:w-full md:max-w-[160px] md:h-auto h-[150px] flex-shrink-0">
          <img
            src={image}
            alt={`icon`}
            className=" md:mr-0 w-full h-auto object-contain rounded-lg"
          />
        </div>

      )}

    </div>
  );
};

export default ServiceCard;
