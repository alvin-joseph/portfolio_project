import React, { useState } from 'react'
import useSound from 'use-sound'

import simpsons from '../../music/TheSimpsons.mp3'
import './Pages.css'

function Homepage() {
    const [play, {stop}] = useSound(simpsons, {volume:0.5})
    // eslint-disable-next-line
    const [isHovering, setIsHovering] = useState(false)

    return (
        <div className="home" id="home">
            <div className="link-container">
                <a href="https://github.com/alvin-joseph" target="_blank" rel="noreferrer noopener">
                    <img src="/images/github.png" alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/alvin-joseph031/" target="_blank" rel="noreferrer noopener">
                    <img src="/images/linkedin.png" alt="linkedin"/>
                </a>
                <a href="https://docs.google.com/document/d/1-_RoQj0GRB5E07t5kKnWWvqYyjt2ls5xhnvg5RvQDwM/export?format=pdf" target="_blank" rel="noreferrer noopener">
                    <img src="/images/cv.png" alt="resume"/>
                </a>
            </div>
            <video src='/videos/Cloud.mp4' autoPlay loop muted />
            <h2>Welcome to...</h2>
            <h1 onMouseEnter={() => {setIsHovering(true); play()}}
            onMouseLeave={() => {setIsHovering(false); stop()}}
            >My<br/> Website</h1>
            <p>Click the text above</p>
            <img className="scroll" src="/images/mousescroll.png" alt="mouse scroll" />
        </div>
    )
}

export default Homepage

