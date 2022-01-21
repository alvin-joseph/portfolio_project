import React, { useState } from "react";

function CardItems(props) {
  const [toggleClass, setToggleClass] = useState("");

  const handleClick = () => {
    console.log("hello");
    if (toggleClass === "is-flipped") {
      setToggleClass("");
    } else {
      setToggleClass("is-flipped");
    }
  };
  return (
    <div className="card">
      <div className={`card__inner ${toggleClass}`} onClick={handleClick}>
        <div className="card__face card__face--front">
          <h2>{props.label}</h2>
          <p>(Click for more info)</p>
        </div>
        <div className="card__face card__face--back">
          <div className="card__content">
            <div className="card__header">
              <video
                src={props.video}
                autoPlay
                loop
                muted
                controls
                poster={props.poster}
                className="project-img"
              >
                This browser does not support the video tag.
              </video>
              <h2>{props.label}</h2>
            </div>
            <div className="card__body">
              <h3>{props.label}</h3>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card__links">
        <a
          href={props.github}
          target="_blank"
          rel="noreferrer"
          className="cards__item__git"
        >
          <img src="images/git-projects.png" alt="GitHub" />
        </a>
        <a
          href={props.path}
          target="_blank"
          rel="noreferrer"
          className="cards__item__git"
        >
          <img src="images/internet.png" alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default CardItems;
