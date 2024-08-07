import {
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTypescript,
} from "react-icons/bi";
import MusicFy from "../assets/images/iPad-1716767037783.jpeg";
import EcommerceImg from "../assets/images/iPad-1716761489563.jpeg";
import NetmoviesImg from "../assets/images/netmovies.jpeg";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation(["projects"]);

  return (
    <section
      id="projects"
      className="w-full pt-20 pb-20 bg-[#000C1C] text-white flex flex-col items-center"
    >
      <div className="w-5/6 max-w-[1000px] relative flex flex-col gap-10 w-max-7xl">
        <h2 className="text-left text-4xl font-bold">{t("title")}</h2>

        <div className="  border-2 overflow-hidden sm:flex sm:justify-strech sm:border-0  border-blue-500 rounded-2xl sm:rounded-none mx-auto sm:mx-0 w-full ">
          <div className="flex flex-col-reverse items-center w-full lg:justify-end lg:flex-row lg:gap-0">
            <div className="w-full p-8 lg:rounded-l-2xl gap-4   bg-black text-white flex flex-col lg:pl-5">
              <div className="max-w-xl flex flex-col gap-4">
                <h2 className=" text-blue-500 text-3xl sm:mt-0 font-medium tracking-tight  sm:text-4xl sm:leading-none max-w-lg">
                  SNKR.sale
                </h2>
                <p className=" text-base text-slate-500 md:text-lg">
                  {t("ecommerce")}
                </p>
              </div>
              <div className="space-x-4  flex">
                <BiLogoReact className="text-[#61DBFB]" size={35} />{" "}
                <BiLogoRedux className="text-[#764ABC]" size={35} />{" "}
                <BiLogoTypescript className="text-[#3079c6]" size={35} />{" "}
                <BiLogoTailwindCss className="text-[#38BDF8]" size={35} />
              </div>
              <div className="">
                <a
                  href="https://github.com/daviddev99/snkrsale-react-ts-redux"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex gap-2 items-center hover:bg-zinc-800 rounded-lg px-3 py-2 text-sm font-medium text-center   focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  {t("code")} <AiFillGithub size={20} />
                </a>
                <a
                  href="https://snkrsale.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ml-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Demo <BiLinkExternal size={20} />
                </a>
              </div>
            </div>
            <img
              alt="logo"
              src={EcommerceImg}
              className="aspect-square lg:rounded-none object-cover w-full lg:w-[24rem]  object-top"
            />
          </div>
        </div>

        <div className=" border-2 overflow-hidden sm:flex sm:justify-strech sm:border-0  border-blue-500 rounded-2xl sm:rounded-none mx-auto sm:mx-0 w-full   ">
          <div className="flex flex-col lg:justify-start items-center justify-between w-full lg:flex-row lg:gap-0">
            <img
              className="aspect-square lg:rounded-none object-cover w-full lg:w-[24rem] object-top"
              alt="logo"
              src={NetmoviesImg}
            />
            <div className="lg:rounded-r-2xl w-full p-8 bg-black text-white flex flex-col gap-4 lg:pr-5">
              <div className=" flex flex-col gap-4  ">
                <h2 className=" text-blue-500 text-3xl sm:mt-0 font-medium tracking-tight sm:text-4xl sm:leading-none max-w-lg ">
                  Netmovies
                </h2>
                <p className=" text-base text-slate-500 md:text-lg">
                  {t("netmovies")}
                </p>
              </div>
              <div className="space-x-4  flex">
                <BiLogoReact className="text-[#61DBFB]" size={35} />{" "}
                <BiLogoRedux className="text-[#764ABC]" size={35} />{" "}
                <BiLogoTailwindCss className="text-[#38BDF8]" size={35} />
              </div>
              <div>
                <a
                  href="https://github.com/daviddev99/netmovies-react-redux"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex gap-2 items-center hover:bg-zinc-900 duration-150 rounded-lg px-3 py-2 text-sm font-medium text-center  focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  {t("code")} <AiFillGithub size={20} />
                </a>
                <a
                  href="https://netmovies-beta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ml-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Demo <BiLinkExternal size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 overflow-hidden sm:flex sm:justify-strech sm:border-0  border-blue-500 rounded-2xl sm:rounded-none mx-auto sm:mx-0 w-full  ">
          <div className="flex  flex-col items-center lg:justify-start w-full lg:flex-row lg:gap-0">
            <div className=" w-full p-8 lg:rounded-l-2xl gap-4   bg-black text-white flex flex-col lg:pl-5">
              <div className=" flex flex-col gap-4  ">
                <h2 className=" text-blue-500 text-3xl sm:mt-0 font-medium tracking-tight sm:text-4xl sm:leading-none max-w-lg ">
                  MusicFy
                </h2>
                <p className=" text-base text-slate-500 md:text-lg">
                  {t("musicfy")}
                </p>
              </div>
              <div className="space-x-4  flex">
                <BiLogoReact className="text-[#61DBFB]" size={35} />{" "}
                <BiLogoTailwindCss className="text-[#38BDF8]" size={35} />
              </div>
              <div>
                <a
                  href="https://github.com/daviddev99/musicfy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex gap-2 items-center hover:bg-zinc-800 rounded-lg px-3 py-2 text-sm font-medium text-center  focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  {t("code")} <AiFillGithub size={20} />
                </a>
                <a
                  href="https://musicfy2.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ml-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Demo <BiLinkExternal size={20} />
                </a>
              </div>
            </div>
            <img
              className="aspect-square lg:rounded-none object-cover w-full lg:w-[24rem] object-top"
              alt="logo"
              src={MusicFy}
            />
          </div>
        </div>

        {/* {/* </ul> */}
      </div>
    </section>
  );
};
