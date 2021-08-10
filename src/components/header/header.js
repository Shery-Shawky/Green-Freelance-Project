import React from "react";
import image1 from "../../assets/image1.jpg";
import "./header.css";

const Header = () => {
  return (
    <div class="carousel relative  bg-white">
      <div class="carousel-inner relative overflow-hidden w-full">
        <input
          class="carousel-open hidden"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div
          class="carousel-item absolute opacity-0 "
          style={{ height: "80vh" }}
        >
          <div
            style={{
              backgroundSize: "100% 100%",
              backgroundImage: `url(
                "https://lh3.googleusercontent.com/proxy/NqyV9LE6B2IlQsGEe4p5CLoXscSrr243SH8c4Rh5mAo7RYRATbpcOhGr9TIyKXwTMYNVior_Uj11rN0D4oeNOkohEXE5VIEOdBFv"
              )`,
            }}
            class="block object-cover  h-full w-full bg-green-300 text-white  text-center"
          >
            <p class="pt-40 text-3xl">Green Environemt Consultant</p>
            <p
              style={{ maxWidth: "800px" }}
              class="pt-10 text-2xl mx-auto pb-10"
            >
              GREEN is a professional partnership providing diverse specialized
              consulting and management services in environment and sustainable
              development.
            </p>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
              Learn More!
            </button>
          </div>
        </div>
        <label
          for="carousel-3"
          class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-green-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          for="carousel-2"
          class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-green-500 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        {/* 2 */}
        <input
          class="carousel-open hidden"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div
          class="carousel-item absolute opacity-0 w-full"
          style={{ height: "80vh" }}
        >
          <div
            style={{
              backgroundSize: "100% 100%",
              backgroundImage: `url(
                "https://lh3.googleusercontent.com/proxy/GDZRXV5Bg946Oocz-_oZYphJd_Ui50-_X4apiRVEKuFo0iMrnXlCc2tpLiQ1BBlg1HCEG9ceytCvqrDllHp3BgFvRtGjaSP9xAf56tC6mFudqJg7gkEFgAQGoUmh983Lmg"
              )`,
            }}
            class="  object-contain	 h-full w-full bg-green-200 text-white  text-center"
          >
            <p class="pt-40 text-3xl">Green Environemt Consultant</p>
            <p
              style={{ maxWidth: "800px" }}
              class="pt-10 text-2xl mx-auto pb-10"
            >
              GREEN is a professional partnership providing diverse specialized
              consulting and management services in environment and sustainable
              development.
            </p>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
              Learn More!
            </button>
          </div>
        </div>
        <label
          for="carousel-1"
          class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          for="carousel-3"
          class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        {/* 3 */}
        <input
          class="carousel-open hidden"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div
          class="carousel-item absolute opacity-0"
          style={{ height: "80vh" }}
        >
          <div
            style={{
              backgroundSize: "100% 100%",
              backgroundImage: `url(
                "		https://www.greenfieldsprimary.school/wp-content/uploads/2018/09/greenfield-wallpaper.jpg
				"
              )`,
            }}
            class="block  object-contain	 h-full w-full bg-green-200 text-white  text-center"
          >
            <p class="pt-40 text-3xl">Green Environemt Consultant</p>
            <p
              style={{ maxWidth: "800px" }}
              class="pt-10 text-2xl mx-auto pb-10"
            >
              GREEN is a professional partnership providing diverse specialized
              consulting and management services in environment and sustainable
              development.
            </p>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
              Learn More!
            </button>
          </div>
        </div>
        <label
          for="carousel-2"
          class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          for="carousel-1"
          class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        {/* Add additional indicators for each slide */}
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label
              for="carousel-1"
              class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-2"
              class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-3"
              class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Header;
