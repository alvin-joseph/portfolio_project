import React from 'react'
import CardItems from './CardItems'

import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Take a look at some of my Projects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems
                            src='images/random-gif.PNG'
                            label='GIF Generator'
                            path='https://random-gif-generator-rust.vercel.app/'
                            github='https://github.com/alvin-joseph/random-gif-generator'
                        />
                        <CardItems
                            src='images/todo-app.PNG'
                            label='To-Do App'
                            path='https://todo-app-chi-green.vercel.app/'
                            github='https://github.com/alvin-joseph/todo-app'
                        />
                        <CardItems
                            src='images/github-followers.PNG'
                            label='GitHub Followers'
                            path='https://github-followers-omega.vercel.app/'
                            github='https://github.com/alvin-joseph/github-followers'
                        />
                        <CardItems
                            src='images/poke-app.PNG'
                            label='PokéApp'
                            path='http://poke-app-ashy.vercel.app/'
                            github='https://github.com/alvin-joseph/poke-app'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
