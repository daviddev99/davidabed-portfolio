import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {useTranslation} from 'react-i18next'
import {toast} from 'react-hot-toast'

export const Contact = () => {
  const form = useRef();
  const {t} = useTranslation(["contact"])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kclfr0e",
        "template_izhz3s3",
        form.current,
        "J6TxMNJ1FTBExuo9V"
      )
      .then(
        (result) => {
          toast.success("E-mail sent")
        },
        (error) => {
          toast.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex justify-center-center w-full pt-20 pb-20 bg-[#001938] text-white "
    >
      <div className="w-5/6 max-w-[1000px] mx-auto flex flex-col items-center lg:flex-row lg:justify-around gap-10">
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-4xl font-bold">
            {t("title")}<span className="text-blue-500">!</span>
          </h2>
        </div>
        <div className="w-full max-w-[400px] bg-[#000C1C] flex p-8 rounded-2xl flex-col border-2 border-blue-500 justify-center  items-center">
          <form
            action=""
            ref={form}
            onSubmit={sendEmail}
            className="flex w-full flex-col  gap-4 text-slate-300"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="flex flex-col gap-2 ">
              <label className="text-slate-400 text-lg font-bold">{t("name")}:</label>
              <input
                className="p-2 border-2 bg-[#001938] outline-none border-blue-500 rounded-lg"
                type="text"
                name="user_name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-400 text-lg font-bold">{t("email")}:</label>
              <input
                className="p-2 border-2 bg-[#001938] outline-none border-blue-500 rounded-lg"
                type="email"
                name="user_email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-400 text-lg font-bold">
                {t("message")}:
              </label>
              <textarea
                name="message"
                className="p-2 resize-none border-2 bg-[#001938] outline-none border-blue-500 rounded-lg"
                rows={10}
              ></textarea>
            </div>
            <input
              type="submit"
              className="bg-blue-600 text-white p-2 font-bold cursor-pointer hover:bg-blue-500  rounded-2xl"
              value={t("send")}
            />
          </form>
        </div>
      </div>
    </section>
  );
};
