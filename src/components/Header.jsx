import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const { t, i18n } = useTranslation(["header"]);

  const languajes = {
    EN: "en",
    ES: "es",
  };
  const [language, setLanguaje] = useState(languajes.EN);

  const handleChangeLanguaje = (e) => {
    setLanguaje(e.target.value);
    i18n.changeLanguage(
      language === languajes.EN ? languajes.ES : languajes.EN
    );
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full fixed h-20 z-10 flex items-center before:w-full before:-z-10 before:backdrop-blur before:absolute before:h-20 justify-center bg-[#000c1cb3] ">
      <div className=" flex relative justify-between text-white  items-center w-5/6 max-w-[1000px]">
        <a href="#main">
          <h1 className="text-2xl font-bold whitespace-nowrap">
            David Abed<span className="text-blue-500">.</span>
          </h1>
        </a>
        <div className=" text-[1.1rem] font-extralight text-slate-300 gap-10">
          <ul className="flex gap-5 ">
            <li className="border-b-2 border-transparent hover:border-blue-500 duration-150">
              <a href="#about">{t("about")}</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-blue-500 duration-150">
              <a href="#projects">{t("projects")}</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-blue-500 duration-150">
              <a href="#contact">{t("contact")}</a>
            </li>
            <li>
              <select
                className="bg-transparent text-lg text-blue-500"
                onChange={handleChangeLanguaje}
              >
                <option value={languajes.EN} className="bg-[#000]">
                  EN
                </option>
                <option value={languajes.ES} className="bg-[#000]">
                  ES
                </option>
              </select>
            </li>
          </ul>
        </div>

        <nav
          className={
            nav
              ? " fixed top-0 right-0 duration-300 w-full h-screen gap-8 text-lg backdrop-blur flex flex-col justify-center items-center text-white/80"
              : "fixed top-0 -right-[100%] duration-300  w-full h-screen gap-8 text-lg backdrop-blur flex flex-col justify-center items-center text-white/80"
          }
        >
          <AiOutlineClose
            size={30}
            onClick={handleNav}
            className="absolute cursor-pointer text-gray-400 top-10 right-10 hover:text-white duration-150 "
          />
          <a
            href="#about"
            className="p-4 w-[75%] bg-slate-800/90 rounded-full shadow-xl shadow-slate-100/5 hover:scale-105 duration-150 text-center hover:text-blue-500 font-bold"
            onClick={handleNav}
          >
            {t("about")}
          </a>
          <a
            href="#projects"
            className="p-4 w-[75%] bg-slate-800/90 rounded-full shadow-xl shadow-slate-100/5 hover:scale-105 duration-150 text-center hover:text-blue-500 font-bold"
            onClick={handleNav}
          >
            {t("projects")}
          </a>
          <a
            href="#contact"
            className="p-4 w-[75%] bg-slate-800/90 rounded-full shadow-xl shadow-slate-100/5 hover:scale-105 duration-150 text-center hover:text-blue-500 font-bold"
            onClick={handleNav}
          >
            {t("contact")}
          </a>
        </nav>
        <div className="lg:hidden">
          <div className="flex  gap-2">
            <select
              className="bg-transparent text-lg text-blue-500"
              onChange={handleChangeLanguaje}
            >
              <option value={languajes.EN} className="bg-[#000]">
                EN
              </option>
              <option value={languajes.ES} className="bg-[#000]">
                ES
              </option>
            </select>
            <AiOutlineMenu
              size={25}
              className=" cursor-pointer "
              onClick={handleNav}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
