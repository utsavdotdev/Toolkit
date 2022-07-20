import React, { useState } from "react";

function Features() {
  const [isOpen, setisOpen] = useState(false);
  const data = [
    {
      title: "Tool 1",
      img: "https://bit.ly/3BQdTqk",
    },
    {
      title: "Tool 2",
      img: "https://bit.ly/3CQFPvv",
    },
    {
      title: "Tool 3",
      img: "https://bit.ly/3BQdTqk",
    },
    {
      title: "Tool 4",
      img: "https://bit.ly/3CQKSwb",
    },
    {
      title: "Tool 5",
      img: "https://bit.ly/3CQFPvv",
    },
    {
      title: "Tool 6",
      img: "https://bit.ly/3BQdTqk",
    },
    {
      title: "Tool 7",
      img: "https://bit.ly/3CQFPvv",
    },
    {
      title: "Tool 8",
      img: "https://bit.ly/3BQdTqk",
    },
    {
      title: "Tool 9",
      img: "https://bit.ly/3CQFPvv",
    },
    {
      title: "Tool 10",
      img: "https://bit.ly/3BQdTqk",
    },
  ];

  const Card = ({ data }) => {
    return (
      <>
        <div className="wrapper wrapperAnime" onClick={() => setisOpen(true)}>
          <div className="header">
            <div className="imageWrapper">
              <img src={data.img} className="image" alt="" />
            </div>
          </div>
          <div className="textWrapper">
            <h1 className="text">{data.title}</h1>
          </div>
        </div>
        {isOpen ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-5 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-2 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg relative flex flex-col w-full bg-[#F6FBF4] outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between pt-3 pl-5 rounded-t">
                    <h3 className="text-xl font-semibold">Modal Title</h3>
                    <button
                      className="pr-2 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setisOpen(false)}
                    >
                      <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative px-6 py-4 flex-auto">
                    <p className="text-slate-500 text-md leading-relaxed">
                      It is used for editing the photo,video etc and helps to
                      remove background..
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-center pb-2">
                    <button
                      className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setisOpen(false)}
                    >
                      Visit Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="opacity-5 w-full h-full fixed z-40 bg-gray-300 cursor-pointer"
              onClick={() => setisOpen(false)}
            ></div>
          </>
        ) : (
          ""
        )}
      </>
    );
  };
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative mx-auto px-4 sm:px-6">
        <div className="pt-10 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-14">
            <h1 className="h2">Tools</h1>
            <p className="text-xl text-gray-600"></p>
          </div>

          {/* Section content */}
          <div className="flex overflow-x-scroll hide-scroll-bar my-2 p-4 space-x-6 rounded-xl">
            {data.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
          <div className="flex overflow-x-scroll hide-scroll-bar my-4 p-4 space-x-6 rounded-xl">
            {data.map((data, index) => (
              <>
                <Card key={index} data={data} />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
