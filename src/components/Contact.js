import React, { useState, useReducer, useContext } from "react";
import Axios from "axios";

import { I18nProvider } from "./providers/i18n";
import translate from "./providers/i18n/translate";
import { AppContext } from "./providers/context";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const formReducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

export default function ContactCopy() {
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(null);
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(
      "https://blooming-tundra-90386.herokuapp.com/api/email",
      formState
    )
      .then((res) => {
        if (res.data.success) {
          setDisabled(true);
          setEmailSent(true);
        } else {
          setDisabled(false);
          setEmailSent(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setDisabled(false);
        setEmailSent(false);
      });
  };

  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const { name, email, message } = formState;
  const { state } = useContext(AppContext);

  return (
    <I18nProvider locale={state.siteLang}>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <h1> {translate("contact_me")}</h1>

          <p>{translate("contact_p_1")}</p>

          <p>
            {translate("contact_p_2")}
            <span>&#128231;</span>
          </p>

          <input
            placeholder="Full Name"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />

          <input
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />

          <textarea
            placeholder="Message"
            name="message"
            type="textarea"
            value={message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" disabled={disabled}>
            {translate("button")}
          </button>

          {/* &&(and) if does equal true we are going to have "Email Sent " */}
          {emailSent === true && (
            <p className="success-msg">{translate("emailSent")}</p>
          )}
          {emailSent === false && (
            <p className="err-msg">{translate("emailNotSent")}</p>
          )}
        </form>
      </div>
    </I18nProvider>
  );
}
