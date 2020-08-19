import React, { useContext } from "react";

import { I18nProvider } from "./providers/i18n";
import translate from "./providers/i18n/translate";
import { AppContext } from "./providers/context";

import Pdf from "../Documents/Resume.pdf";
import profile from "../assets/suri.jpeg";

export default function About() {
  const { state } = useContext(AppContext);

  return (
    <I18nProvider locale={state.siteLang}>
      <div>
        <h1 className="about-me">{translate("title")}</h1>
        <div className="inner-container">
          <div className="p-container">
            <p className="paragraph">{translate("paragraph1")}</p>
            <p className="paragraph">{translate("paragraph2")}</p>
            <p className="paragraph">{translate("paragraph3")}</p>
          </div>
          <div className="img-container">
            <img className="profile-img" src={profile} alt="" />
          </div>
        </div>

        <a className="resume" href={Pdf}>
          {translate("link")}
        </a>
      </div>
    </I18nProvider>
  );
}
