import React from "react";
import { BiSearchAlt,BiCheck,BiAnalyse} from "react-icons/bi";
function FeaturesBlocks() {
  const Services = [
    {
      icon:<BiSearchAlt size={28} color="#fff" />,
      name: "Explore",
      des: "Explore awesome tools which helps you in incredible way.",
    },
    {
      icon:<BiCheck size={30} color="#fff"/>,
      name: "Simple",
      des: "Toolkit is the simple web portal which provides user friendly environment.",
    },
    {
      icon:<BiAnalyse size={28} color="#fff"/>,
      name: "Up to Date",
      des: "Daily new tool is added on our's Web tool verse. ",
    },
  ];
  const ServiceCard = ({ data }) => {
    const { name, des,icon } = data;
    return (
      <>
        <div className="relative flex flex-col items-center p-6 bg-[#2C3639] rounded shadow-xl">
          <div className="flex items-center justify-center w-12 h-12 mt-1 mb-2 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full">
            {icon}
          </div>
          <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
            {name}
          </h4>
          <p className="text-gray-400 text-center">{des}</p>
        </div>
      </>
    );
  };
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">Our Services </h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {Services.map((data, i) => (
              <ServiceCard key={i} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
