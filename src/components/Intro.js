import React, { useContext } from "react";

import { I18nProvider } from "./providers/i18n";
import translate from "./providers/i18n/translate";
import { AppContext } from "./providers/context";

import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

export default function Intro() {
  const translation = (words) => {
    return (
      <TypistLoop interval={2000}>
        {words.map((text) => (
          <Typist className="steps" key={text} startDelay={800}>
            {text}
          </Typist>
        ))}
      </TypistLoop>
    );
  };

  const { state } = useContext(AppContext);
  return (
    <I18nProvider locale={state.siteLang}>
      <div>
        <h1 className="intro"> {translate("intro")}</h1>
        <div className="steps-container">
          {/* <Translation
            words={["software developer", "creative", "passionate"]}
          /> */}
          {state.siteLang === "en-us"
            ? translation(["Software Developer", "Creative", "Passionate"])
            : translation([
                "Desarrolladora De Software",
                "Creativa",
                "Apasionada",
              ])}
        </div>
      </div>
    </I18nProvider>
  );
}
