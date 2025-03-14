"use client";

import Link from "next/link";

const ButtonLang = ({ currentLang }) => {
  const newLang = currentLang === 'en' ? 'hi' : 'en';

  return (
    <Link href={`?lang=${newLang}`}>
      <button className="bg-blue-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out duration-200">
        {newLang === 'en' ? "Switch to English" : "Switch to Hindi"}
      </button>
    </Link>
  );
};

export default ButtonLang;
