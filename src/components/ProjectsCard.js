import React, { Component } from "react";
import recipe from "../assets/recipe.png";
import chat from "../assets/chat.png";
import twitter from "../assets/twitter-bot.png";
import salud from "../assets/salud.png";
import { Icon } from "semantic-ui-react";

const messages = {
  en: {
    title: "Projects",
    project1: `Personally developed a full-stack chat application from front to back with React,
        Redux, Firebase 5, and Semantic UI React. React Slack Clone allows user to communicate between
        development teams or groups (channels)`,
    project2: `In one week sprint my team and I created a full stack website that uses React, NodeJS, Firebase, CSS3 and Spoonacular API to build a recipe site with over 350,000 recipes available for the user. The recipes are able to be called based on name, allergens and dietary.)`,
    project3: `My team and I created a bot for the alchemy code lab community in one week sprint. Let's Talk About It its A backend twitter bot that that helps stop the stigma of mental health by sharing facts and questions to help spark conversation and reflection. It scrapes data about mental health from research papers and websites and then it sends automated tweets for approval via email weekly to the developers team.`,
    project4: `Created a full stack app in one week sprint using ReactJS and NodeJS.  Salud! is a simple, easy to use app that uses the Cocktail DB API  to get access to over 500+  best and latest cocktail recipes. The cocktails are available to be called based on name.`,
  },
  es: {
    title: "Projectos",
    project1: `Desarrollé personalmente una aplicación de chat con React,Redux, Firebase 5 y Semantic UI React. React Slack Clone permite al usuario comunicarse entre equipos de desarrollo o grupos de chat (canales)`,
    project2: `En una semana, mi equipo y yo creamos un sitio web con React, NodeJS, Firebase, CSS3 y Spoonacular API para construir un sitio de recetas con más de 350,000 recetas disponibles para el usuario. Las recetas pueden llamarse según el nombre, los alérgenos y la dieta).`,
    project3: `Mi equipo y yo creamos un bot en una semana. Let's Talk About It, es un bot backend de twitter que ayuda a detener el estigma de la salud mental al compartir hechos y preguntas para ayudar a generar conversación y reflexión. Recoge datos sobre salud mental de artículos de investigación y sitios web y luego envía tweets automatizados para su aprobación por correo electrónico semanalmente al equipo de desarrolladores.`,
    project4: `Mi equipo y yo creamos una aplicación completa en una semana usando ReactJS y NodeJS. Salud! es una aplicación simple y fácil de usar que utiliza la API de Cocktail DB para obtener acceso a más de 500 recetas de los mejores cócteles y los más recientes. Los cócteles están disponibles para ser llamados según el nombre.`,
  },
};

export default class ProjectsCard extends Component {
  render() {
    return (
      <>
        <h1 className="projects">
          Projects <span>&#128187;</span>
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
              <p className="project-text">
                Personally developed a full-stack chat application from front to
                back with React, Redux, Firebase 5, and Semantic UI React. React
                Slack Clone allows user to communicate between development teams
                or groups (channels)
              </p>
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
              <p className="project-text">
                In one week sprint my team I created a full stack website that
                uses React, NodeJS, Firebase, CSS3 and Spoonacular API to build
                a recipe site with over 350,000 recipes available for the user.
                The recipes are able to be called based on name, allergens and
                dietary.)
              </p>
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
              <p className="project-text">
                My team and I created a bot for the alchemy code lab community
                in one week sprint. Let's Talk About It its A backend twitter
                bot that that helps stop the stigma of mental health by sharing
                facts and questions to help spark conversation and reflection.
                It scrapes data about mental health from research papers and
                websites and then it sends automated tweets for approval via
                email weekly to the developers team.
              </p>
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
              <p className="project-text">
                Created a full stack app in one week sprint using ReactJS and
                NodeJS. Salud! is a simple, easy to use app that uses the
                Cocktail DB API  to get access to over 500+  best and latest
                cocktail recipes. The cocktails are available to be called based
                on name.
              </p>
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
    );
  }
}
