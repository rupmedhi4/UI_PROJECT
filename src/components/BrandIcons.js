import React from 'react';

const BrandIcons = () => {
  const icons = [
    {
      name: "Amazon",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Dribbble",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Dribbble_logo_%28updated%29.svg",
    },
    {
      name: "HubSpot",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/91/HubSpot_Logo.svg",
    },
    {
      name: "Notion",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    },
    {
      name: "Netflix",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      name: "Zoom",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
    },
  ];

  return (
    <div className="flex justify-center px-4">
      <div className="grid grid-cols-3 gap-6 w-full lg:grid-cols-6 lg:gap-4 sm:w-[100%] ">
        {icons.map((icon) => (
          <div key={icon.name} className="flex items-center justify-center p-4">
            <img
              src={icon.url}
              alt={icon.name}
              className="w-16 h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandIcons;
