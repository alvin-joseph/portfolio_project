import React, { useState } from "react";
import CardItems from "./CardItems";

import "./Cards.css";

function Cards() {
  const [current, setCurrent] = useState(0);
  const length = 4;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  return (
    <div className="cards">
      <h1>Take a look at some of my Projects!</h1>
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10096;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10097;
        </button>
        <ul className="cards__items">
          <li className={current === 0 ? "slide active" : "slide"}>
            <CardItems
              label="To-Do App"
              path="https://todo-app-chi-green.vercel.app/"
              github="https://github.com/alvin-joseph/todo-app"
              video="https://i.gyazo.com/b3a9f4ff15eb43f2dd31a80d6104d0b1.mp4"
              poster="images/todo-app.PNG"
              description="This app allows you to create and delete todo items. You are also able to set an item as either completed or uncompleted and filter by those categories. These items will also persist in the local drive. Built with React."
            />
          </li>
          <li className={current === 1 ? "slide active" : "slide"}>
            <CardItems
              label="GitHub Followers"
              path="https://github-followers-omega.vercel.app/"
              github="https://github.com/alvin-joseph/github-followers"
              video="https://i.gyazo.com/a003ec0d4128646db716b850e482c966.mp4"
              poster="images/github-followers.PNG"
              description="This project allows you to see the image, name, and GitHub username of all your GitHub followers. You are also able to search for other users as well. Built with React, GitHub API, and Styled Components."
            />
          </li>
          <li className={current === 2 ? "slide active" : "slide"}>
            <CardItems
              label="PokéApp"
              path="http://poke-app-ashy.vercel.app/"
              github="https://github.com/alvin-joseph/poke-app"
              video="https://i.gyazo.com/609fa04aa9230edfcc1d172629457b78.mp4"
              poster="images/pokemon-app.png"
              description="A list of the Kanto Region pokémon with details for each. Built with React, Bootstrap, PokéAPI, Firebase, and Framer-Motion"
            />
          </li>
          <li className={current === 3 ? "slide active" : "slide"}>
            <CardItems
              label="Travel Pal"
              path="https://travel-pal-ohkpuxqmf-alvin-joseph.vercel.app/"
              github="https://github.com/alvin-joseph/travel-pal"
              video="https://i.gyazo.com/24022ee00c8c78685666ad43f8235cdf.mp4"
              poster="images/travel-pal.PNG"
              description="This app allows you to create multiple trips. You are able to add notes and images to these trips. Created using React, Firebase, and Boostrap"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cards;
