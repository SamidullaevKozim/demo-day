import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Help = () => {
  let ref = useRef();
  const { t } = useTranslation();

  function sendE(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_seenkn6", "template_wxlu23e", ref.current, {
        publicKey: "ouw5LV56zzU31b_S1",
      })
      .then(() => alert("SUCCESS!"))
      .catch(() => alert("FAILED..."));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {t("help-title")}
          </h2>
          <p className="text-gray-600 text-lg">{t("help-desc")}</p>
        </div>

        <form ref={ref} onSubmit={sendE} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder={t("input-name")}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder={t("input-email")}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <textarea
            name="message"
            placeholder={t("input-text")}
            className="w-full p-3 h-32 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            {t("send")}
          </button>
        </form>

        <div className="mt-8 text-center text-gray-700">
          <p className="text-lg">{t("call")}</p>
          <p className="text-2xl font-semibold text-blue-600 mt-1">
            +998 94 022 00 29
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
