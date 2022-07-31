import React, { useState, useRef, useEffect } from "react";
import { BiX, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import axios from "axios";

function Features() {
  const [Open, setOpen] = useState(false);
  const [Tools, setTools] = useState([]);
  const [tempData, setTempdata] = useState([]);
  const [Loading, setLoading] = useState(true);

  //setting up reference for scrolling the tool
  //I know , It's been hard coding but .....
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const scroll1 = (dir) => {
    if (dir == "left") {
      ref1.current.scrollLeft -= 200;
    } else if (dir == "right") {
      ref1.current.scrollLeft += 200;
    }
  };
  const scroll2 = (dir) => {
    if (dir == "left") {
      ref2.current.scrollLeft -= 200;
    } else if (dir == "right") {
      ref2.current.scrollLeft += 200;
    }
  };
  const Modal = ({ name, des, link }) => {
    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-5 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-2 mx-auto max-w-sm">
            {/*content*/}
            <div className="border-0 rounded-lg relative flex flex-col w-full bg-[#313c3f] outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between pt-3 pl-5 rounded-t">
                <h3 className="text-xl text-gray-200 font-semibold">{name}</h3>
                <button
                  className="pr-3 ml-auto border-0 float-right text-2xl leading-none"
                  onClick={() => setOpen(!Open)}
                >
                  <span className="h-6 w-6">
                    <BiX color={"#dfdfdf"} />
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative px-6 py-4 flex-auto">
                <p className="text-slate-300 text-md leading-relaxed">{des}</p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-center pb-2">
                <a href={link} target={"_blank"}>
                  <button
                    className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow outline-none mr-1 mb-1"
                    type="button"
                  >
                    Visit Website
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const Lcard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //This is the logic to map dynamic data in modal🔥
  const getData = (name, des, link) => {
    let tempData = [name, des, link];
    setTempdata((item) => [1, ...tempData]);
    return setOpen(!Open);
  };

  //Getting tools from api
  const getTools = () => {
    axios
      .get(`https://toolkit007.herokuapp.com/api/tools`)
      .then((res) => {
        setTools(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getTools();
  }, []);

  const Card = ({ data }) => {
    return (
      <>
        <div
          className="wrapper wrapperAnime"
          onClick={() => getData(data.name, data.des, data.link)}
        >
          <div className="header">
            {data.image != null ? (
              <div className="imageWrapper">
                <img src={data.image} className="image" alt="" />
              </div>
            ) : (
              <div className="bg-[#3F4E4F] w-48 h-32 rounded-2xl overflow-hidden animate-pulse">
                {" "}
              </div>
            )}
          </div>
          <div className="textWrapper">
            <h1 className="text">{data.name}</h1>
          </div>
        </div>
        {Open ? (
          <Modal name={tempData[1]} des={tempData[2]} link={tempData[3]} />
        ) : null}
      </>
    );
  };

  const LoadingCard = () => {
    return (
      <div className="wrapper wrapperAnime">
        <div className="header">
          <div className="bg-[#3F4E4F] w-48 h-32 rounded-2xl overflow-hidden animate-pulse">
            {" "}
          </div>
        </div>
        <div className="bg-[#3F4E4F] pt-4 pb-2 w-32 px-2 mx-4 my-2 rounded-lg animate-pulse"></div>
      </div>
    );
  };

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-[#2C3333] pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative mx-auto px-4 sm:px-6">
        <div className="pt-10 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 pt-6 md:pb-14">
            <h1 className="h2">Tools</h1>
            <p className="text-xl text-gray-600"></p>
          </div>

          {/* Section content */}
          <div
            className="flex items-center overflow-x-scroll smooth-behaviour design-scroll-bar my-4 py-4 space-x-4 rounded-xl"
            ref={ref1}
          >
            <div className="nextBtn" onClick={() => scroll1("right")}>
              <BiChevronRight size={25} />{" "}
            </div>
            {Loading
              ? Lcard.map((index) => <LoadingCard key={index} />)
              : Tools.slice(0,9).map((data, index) => {
                  return <Card key={data.id} data={data} />;
                })}

            <div className="PreBtn">
              <BiChevronLeft size={25} onClick={() => scroll1("left")} />
            </div>
          </div>

          <div
            className="flex items-center overflow-x-scroll smooth-behaviour design-scroll-bar my-4 py-4 space-x-4 rounded-xl"
            ref={ref2}
          >
            <div className="nextBtn" onClick={() => scroll2("right")}>
              <BiChevronRight size={25} />{" "}
            </div>

            {Loading
              ? Lcard.map((index) => <LoadingCard key={index} />)
              : Tools.slice(9).map((data, index) => {
                  return <Card key={data.id} data={data} />;
                })}
            <div className="PreBtn">
              <BiChevronLeft size={25} onClick={() => scroll2("left")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
