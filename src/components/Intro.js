import React, { useContext } from "react";

import { I18nProvider } from "./providers/i18n";
import translate from "./providers/i18n/translate";
import { AppContext } from "./providers/context";

import Typical from "react-typical";

export default function Intro() {
  const { state } = useContext(AppContext);
  return (
    <I18nProvider locale={state.siteLang}>
      <div>
        <h1 className="intro"> {translate("intro")}</h1>
        <div className="steps-container">
          <Typical
            className="steps"
            loop={Infinity}
            wrapper="b"
            steps={[
              "Web Developer",
              1000,
              "Creative",
              1000,
              "Passionate",
              1000,
            ]}
          />
        </div>
      </div>
    </I18nProvider>
  );
}
