import React, { Component, useContext } from "react";

import { I18nProvider } from "./providers/i18n";
import translate from "./providers/i18n/translate";
import { AppContext } from "./providers/context";

import recipe from "../assets/recipe.png";
import chat from "../assets/chat.png";
import twitter from "../assets/twitter-bot.png";
import salud from "../assets/salud.png";
import { Icon } from "semantic-ui-react";

export default function ProjectsCard() {
  const { state } = useContext(AppContext);

  return (
    <I18nProvider locale={state.siteLang}>
      <>
        <h1 className="projects">
          {translate("projects")} <span>&#128187;</span>
        </h1>

        {/* project 1 */}
        <div className="project-body">
          <div className="project-post">
            <div className="project-img-container">
              <img className="project-img" src={chat} alt="" />
            </div>
            <div className="project-info-container">
              <div className="project-info">
                <h2 className="project-title">React Slack Clone</h2>
                <span>React | Redux | Firebase | Semantic UI</span>
              </div>
              <p className="project-text">{translate("project1")}</p>
              <div>
                <a
                  href="https://github.com/SuriSegarra/Slack-clone"
                  className="cta"
                >
                  <Icon name="github"></Icon>
                </a>
                <a
                  href="https://react-slack-622cb.web.app/login"
                  className="cta"
                >
                  <Icon name="linkify"></Icon>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 2 */}
        <div className="project-body">
          <div className="project-post">
            <div className="project-img-container">
              <img className="project-img" src={recipe} alt="" />
            </div>
            <div className="project-info-container">
              <div className="project-info">
                <h2 className="project-title">Just A Recipe</h2>
                <span>
                  ReactJS | Node | Express | HTML | CSS | MongoDB | Mongoose |
                  Firebase | Spoonacular API
                </span>
              </div>
              <p className="project-text">{translate("project2")}</p>
              <div>
                <a href="https://github.com/Just-A-Recipe" className="cta">
                  <Icon name="github"></Icon>
                </a>
                <a href="https://justarecipe.netlify.app/" className="cta">
                  <Icon name="linkify"></Icon>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 3 */}
        <div className="project-body">
          <div className="project-post">
            <div className="project-img-container">
              <img className="project-img" src={twitter} alt="" />
            </div>
            <div className="project-info-container">
              <div className="project-info">
                <h2 className="project-title">Let's Talk About it</h2>
                <span>
                  ReactJS | Node | Express | HTML | CSS | MongoDB | Mongoose
                </span>
              </div>
              <p className="project-text">{translate("project3")}</p>
              <div>
                <a
                  href="https://github.com/mental-health-twitterbot"
                  className="cta"
                >
                  <Icon name="github"></Icon>
                </a>
                <a
                  href="https://letstalkabout-react.herokuapp.com/"
                  className="cta"
                >
                  <Icon name="linkify"></Icon>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-body">
          <div className="project-post">
            <div className="project-img-container">
              <img className="project-img" src={salud} alt="" />
            </div>
            <div className="project-info-container">
              <div className="project-info">
                <h2 className="project-title">Salud!</h2>
                <span>React | Node | Cocktail DB API | CSS</span>
              </div>
              <p className="project-text">{translate("project4")}</p>
              <div>
                <a href="https://github.com/Salud-alchemy" className="cta">
                  <Icon name="github"></Icon>
                </a>
                <a
                  href="https://intense-woodland-75694.herokuapp.com/login"
                  className="cta"
                >
                  <Icon name="linkify"></Icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </I18nProvider>
  );
}
