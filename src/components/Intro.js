import React, { useContext } from "react";

import { I18nProvider } from "./providers/i18n";
import translate from "./providers/i18n/translate";
import { AppContext } from "./providers/context";

import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

export default function Intro() {
  const { state } = useContext(AppContext);
  return (
    <I18nProvider locale={state.siteLang}>
      <div>
        <h1 className="intro"> {translate("intro")}</h1>
        <div className="steps-container">
          <TypistLoop interval={1000}>
            {["Software Developer", "Creative", "Passionate"].map((text) => (
              <Typist
                className="steps"
                key={text}
                startDelay={500}
                // eraseDelay="500"
              >
                {text}
              </Typist>
            ))}
          </TypistLoop>
        </div>
      </div>
    </I18nProvider>
  );
}
