import React from "react";
import Image from "next/image";
import Home from "../Assets/home.webp";
import Link from "next/link";
// import HanuManJI from "../../pub\jpeg"
export default function Card(props) {
  const { redirect, title, textColor, description, imageUrl } = props;
  // console.log("image url ---", imageUrl);

  return (
    <Link href={`${redirect}`}>
      <div className="flex flex-col lg:flex-row mt-10 -translate-y-2 shadow-[0px_-4px_10px_rgba(0,0,0,0.1)] bg-slate-200 w-[9rem] lg:px-2 lg:w-[25rem] py-2 px-2 rounded-sm h-[26rem] lg:h-[12rem] justify-between hover:bg-orange-100 hover:shadow-xl transition duration-300 ease-in-out">
        {/* <!-- Image on the left (resized for large screens) --> */}
        <div className="flex justify-center items-center flex-grow">
          <Image
            src={imageUrl}
            width={210}
            height={210}
            alt="Hindu-God-image"
            className="lg:w-[7rem] lg:h-[9rem]"
          />
        </div>

        {/* <!-- Content on the right --> */}
        <div className="flex flex-col justify-evenly items-center lg:items-start flex-grow lg:ml-4 lg:py-4">
          <h5
            className={`mb-2 text-lg font-semibold leading-tight ${textColor} lg:pt-5`}
          >
            {title}
          </h5>
          <p className="mb-4 text-base text-neutral-700">{description}</p>

          {/* <!-- Button with consistent positioning --> */}
          <div className="mt-auto w-full lg:w-auto">
            <button className="bg-blue-400 px-5 py-1 rounded-full w-full lg:w-auto lg:self-start font-serif">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
