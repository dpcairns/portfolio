import React, { Component } from "react";
import Axios from "axios";

const messages = {
  en: {
    title: "Contact Me",
    paragraph1: `I know a solid contact form will never fail you. But you can also
    contact me via any of the social platforms at the bottom of the page.`,
    paragraph2: ` Just drop me a message of whatever you feel like, a cool idea or maybe
    you just want to get in contact with me, and I will go back to you as
    soon as I can.`,
  },
  es: {
    title: `Hablemos`,
    paragraph1: `Sé que un formulario de contacto sólido nunca te fallará. Pero tu tambien puedes
    contácteme a través de cualquiera de las plataformas sociales en la parte inferior de la página.`,
    paragraph2: `Envíeme un mensaje de lo que le apetezca, una idea genial o tal vez
    solo quieres ponerte en contacto conmigo, y te responderé 
    tan pronto como pueda.`,
    name: "Nombre Completo",
    email: "Correo electrónico",
  },
};

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null,
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true,
    });

    Axios.post(
      "https://blooming-tundra-90386.herokuapp.com/api/email",
      this.state
    )
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    const { name, message, email, disabled, emailSent } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1> Contact Me</h1>

        <p>
          I know a solid contact form will never fail you. But you can also
          contact me via any of the social platforms at the bottom of the page.
        </p>

        <p>
          Just drop me a message of whatever you feel like, a cool idea or maybe
          you just want to get in contact with me, and I will go back to you as
          soon as I can. <span>&#128231;</span>
        </p>

        <input
          placeholder="Full Name"
          name="name"
          type="text"
          value={name}
          onChange={this.handleChange}
        />

        <input
          placeholder="Email"
          name="email"
          type="email"
          value={email}
          onChange={this.handleChange}
        />

        <textarea
          placeholder="Message"
          name="message"
          type="textarea"
          value={message}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        ></textarea>

        <button type="submit" disabled={disabled}>
          Send
        </button>

        {/* &&(and) if does equal true we are going to have "Email Sent " */}
        {emailSent === true && <p className="success-msg">Email Sent</p>}
        {emailSent === false && <p className="err-msg">Email Not Sent</p>}
      </form>
    );
  }
}

export default Contact;
