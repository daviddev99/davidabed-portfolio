import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { LuNewspaper } from "react-icons/lu";
import { useTranslation } from "react-i18next";

export const Main = () => {
  const { t } = useTranslation(["main"]);

  return (
    <main
      id="main"
      className="h-screen mx-auto flex flex-col lg:flex-row justify-center w-5/6 max-w-[1000px] gap-8 lg:justify-between items-center "
    >
      <div className="whitespace-nowrap">
        <h3 className="text-2xl md:text-3xl xl:text-4xl text-white">
          {t("greeting")}
        </h3>
        <h2 className="text-3xl  sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 md:text-4xl xl:text-5xl">
          {t("position")}
        </h2>
        <h3 className="text-xl mt-2 md:text-2xl xl:text-3xl text-slate-400">
          {t("message")}
        </h3>
      </div>
      <div className="flex flex-col  gap-4 sm:flex-row  justify-center ">
        <a
          className="flex text- lg:text-md items-center text-white p-2 border-2 rounded-full gap-2 justify-center hover:bg-white hover:text-black duration-150 hover:scale-105"
          href="https://linkedin.com/in/davidabeddev"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <AiFillLinkedin size={30} />
        </a>
        <a
          className="flex text- lg:text-md items-center text-white p-2 border-2 rounded-full gap-2 justify-center hover:bg-white hover:text-black duration-150 hover:scale-105"
          href="https://github.com/daviddev99"
          target="_blank"
          rel="noreferrer"
        >
          Git Hub <AiFillGithub size={30} />
        </a>
        <a
          className="flex text- lg:text-md items-center text-white p-2 border-2 rounded-full gap-2 justify-center bg-blue-500 border-blue-600"
          href="https://drive.google.com/file/d/1ldOCyYROej_TbyOz8hmnlMh9ZizXr_pu/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          {t("resume")} <LuNewspaper size={30} />
        </a>
      </div>
    </main>
  );
};
