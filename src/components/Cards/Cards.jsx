import React from "react";
import CardItems from "./CardItems";

import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Take a look at some of my Projects!</h1>
      <ul className="cards__items">
        <CardItems
          label="GIF Generator"
          path="https://random-gif-generator-rust.vercel.app/"
          github="https://github.com/alvin-joseph/random-gif-generator"
          video="https://i.gyazo.com/78e6be5815a44627b2441b79e5034fe9.mp4"
          poster="images/random-gif.PNG"
          description="I implemented the GIPHY API in order to generate a random GIF on the click of a button along with one you can search. Built with React and the GIPHY API."
        />
        <CardItems
          label="To-Do App"
          path="https://todo-app-chi-green.vercel.app/"
          github="https://github.com/alvin-joseph/todo-app"
          video="https://i.gyazo.com/b3a9f4ff15eb43f2dd31a80d6104d0b1.mp4"
          poster="images/todo-app.PNG"
          description="This app allows you to create and delete todo items. You are also able to set an item as either completed or uncompleted and filter by those categories. These items will also persist in the local drive. Built with React."
        />
        <CardItems
          label="GitHub Followers"
          path="https://github-followers-omega.vercel.app/"
          github="https://github.com/alvin-joseph/github-followers"
          video="https://i.gyazo.com/a003ec0d4128646db716b850e482c966.mp4"
          poster="images/github-followers.PNG"
          description="This project allows you to see the image, name, and GitHub username of all your GitHub followers. You are also able to search for other users as well. Built with React, GitHub API, and Styled Components."
        />
        <CardItems
          label="PokéApp"
          path="http://poke-app-ashy.vercel.app/"
          github="https://github.com/alvin-joseph/poke-app"
          video="https://i.gyazo.com/c274d00c0b177864ced0ad27c1892218.mp4"
          poster="images/poke-app.PNG"
          description="A list of the Kanto Region pokémon with details for each. Built with React, Bootstrap, and the PokéAPI."
        />
      </ul>
    </div>
  );
}

export default Cards;
