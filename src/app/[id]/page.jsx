import React from "react";
import content from "../../utilities/data.js";
import Link from "next/link.js";
import ButtonLang from "../../components/ButtonChangeLang.jsx";

const Page = ({ params, searchParams }) => {
  const { id } = params;

  const mainData = content.filter((item) => item.id == id);

  // Get the language from query parameters, default to 'en'
  const lang = searchParams.lang || 'en';

  return (
    <div className="main-section p-3 bg-gradient-to-r from-yellow-100 to-pink-200">
      {/* Update the href to link directly to the home page */}
      
        <div className="back pl-3 flex pt-2 ">
        <Link href="/">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 111.414 1.414L4.414 10l6.293 6.293a1 1 0 01-.707 1.707z"
              clipRule="evenodd"
            />
          </svg>
          <div className="flex">Back to Home</div>
          </div>
          </Link>
          
        </div>
      
      <div className="pt-2 px-4 ">
        <h1 className="text-2xl py-2 font-semibold text-gray-800">
          {mainData[0].title}
        </h1>

        <ButtonLang currentLang={lang} />

        <div
          className="text-center"
          dangerouslySetInnerHTML={{
            __html: lang === 'en' ? mainData[0]?.contentEnglish : mainData[0]?.contentHindi
          }}
        />
      </div>
    </div>
  );
};

export default Page;
