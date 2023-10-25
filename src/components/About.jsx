import HTMLIcon from "../assets/images/html-1.svg";
import CSSIcon from "../assets/images/css-3.svg";
import JSIcon from "../assets/images/logo-javascript.svg";
import ReactIcon from "../assets/images/react-2.svg";
import ReduxIcon from "../assets/images/redux-logo.svg";
import TailwindIcon from "../assets/images/tailwind-css-2.svg";
import GitIcon from "../assets/images/git-icon.svg";
import GitHIcon from "../assets/images/github-icon-1.svg";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation(["about"]);

  return (
    <section id="about" className="w-full pt-20 pb-20 bg-[#001938] text-white">
      <div className="w-5/6 max-w-[1000px] mx-auto flex flex-col justify-center gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">
            {t("title")} <span className="text-blue-600">{t("me")}</span>
          </h2>
          <p className="max-w-[100ch] text-lg">
          {t("description")}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-2xl">{t("education")}:</h3>
            <ul className="flex list-disc gap-5 lg:flex-col">
              <li className="ml-5">
                <p className="font-bold text-lg">{t("degree")}</p>
                <p className="italic text-slate-400">
                  {t("schoolName")}
                </p>
                <p className="italic text-slate-400">2018-2021</p>
              </li>
              <li className="lg:ml-5">
                <p className="font-bold text-lg">{t("englishDegree")}</p>
                <p className="italic text-slate-400">{t("instituteName")}</p>
                <p className="italic text-slate-400">2021-2022</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-2xl">{t("tech")}:</h3>
            <ul className="flex gap-4 flex-wrap">
              <li className="flex flex-col justify-center items-center gap-1">
                <img src={HTMLIcon} className="w-11 h-11" alt="" /> <p>HTML</p>
              </li>
              <li className="flex flex-col justify-center items-center gap-1">
                <img src={CSSIcon} className="w-11 h-11" alt="" /> <p>CSS</p>
              </li>
              <li className="flex flex-col justify-center items-center gap-1">
                <img src={JSIcon} alt="" className="w-11 h-11" />{" "}
                <p>JavaScript</p>
              </li>
              <li className="flex flex-col justify-center items-center gap-1">
                <img src={ReactIcon} alt="" className="w-11 h-11" />{" "}
                <p>React</p>
              </li>
              <li className="flex flex-col justify-center items-center gap-1">
                <img src={ReduxIcon} alt="" className="w-11 h-11" />{" "}
                <p>Redux</p>
              </li>
              <li className="flex flex-col justify-center items-center gap-1">
                <img src={TailwindIcon} alt="" className="w-11 h-11" />{" "}
                <p>TailwindCSS</p>
              </li>
              <li className="flex flex-col justify-center items-center gap-1">
                <img src={GitIcon} alt="" className="w-11 h-11" /> <p>Git</p>
              </li>
              <li className="flex flex-col justify-center items-center gap-1">
                <img src={GitHIcon} alt="" className="w-11 h-11" />{" "}
                <p>Git Hub</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
