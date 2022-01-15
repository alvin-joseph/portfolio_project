import React from "react";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

function About() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div className="about" id="about">
      <ScrollPage page={1}>
        <div className="about-container">
          <Animator animation={batch(MoveIn(-900, 0), MoveOut(1000, 0))}>
            <h1>
              Hello, My name is Alvin{" "}
              <span
                style={{
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                }}
              >
                Simpson
              </span>{" "}
              Joseph
            </h1>
          </Animator>
          <Animator animation={batch(MoveIn(900, 0), MoveOut(-900, 0))}>
            <h2>
              I graduated from the Full Stack Web Development program from
              Lambda School. I am excited to start my career in the web
              development industry! I am currently located in Yukon, Oklahoma
              but I am also willing to relocate if need be. When I am not
              writing code I like to go fishing and rafting when the weather is
              nice!
            </h2>
          </Animator>
          <Animator animation={batch(MoveIn(-1000, 0), MoveOut(1000, 0))}>
            <img
              className="lambda"
              src="https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/60e899faca8141ea5319530b_Lambda%20School%20_%20Logo%20_%20Red%402x.png"
              alt="lambda school"
            />
          </Animator>
        </div>
      </ScrollPage>
    </div>
  );
}

export default About;
