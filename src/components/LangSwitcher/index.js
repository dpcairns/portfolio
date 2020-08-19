import React, { useContext } from "react";
import { LOCALES } from "../providers/i18n";
import { AppContext } from "../providers/context";

export default () => {
  const { dispatch } = useContext(AppContext);

  const setLanguage = (siteLang) => dispatch({ type: "setLang", siteLang });

  const handleChange = (e) => {
    setLanguage(LOCALES[e.target.value]);
  };
  return (
    <div>
      <select onChange={handleChange}>
        {Object.keys(LOCALES).map((locale) => {
          return (
            <option key={locale} value={locale}>
              {locale}
            </option>
          );
        })}
      </select>
    </div>
  );
};
