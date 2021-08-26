import React from 'react'

function About() {
    return (
        <div className="about" id="about">
            <h1>Hello, My name is Alvin <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>Simpson</span> Joseph</h1>
            <h2>I graduated from the Full Stack Web Development program from Lambda School. I am excited to start my career in the web development industry! I am currently located in Yukon, Oklahoma but I am also willing to relocate if need be. 
            When I am not writing code I like to go fishing and rafting when the weather is nice!</h2>
            <img className="lambda" src="https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/60e899faca8141ea5319530b_Lambda%20School%20_%20Logo%20_%20Red%402x.png" alt="lambda school" />
        </div>
    )
}

export default About
