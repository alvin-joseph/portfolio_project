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
                            text='Do you like GIFs? Well this is the app for you!'
                            description='A challenge I faced when making this application was 
                            getting myself to use a custom hook in order to extract component logic into
                            reusable functions. I was able to implement the custom hook successfully and apply
                            them to the components. I also included another version without the custom hook in order
                            to test myself using both methods.'
                            label='Random GIF Generator'
                            path='https://random-gif-generator-rust.vercel.app/'
                            github='https://github.com/alvin-joseph/random-gif-generator'
                        />
                        <CardItems
                            src='images/todo-app.PNG'
                            text='Need a reminder to-do something? I got just the app!'
                            description='A challenge I faced when making this application was 
                            figuring out how to get the to-do items to persist in the local storage
                            in order to keep them on the page upon a user refresh. I was able to first check if there
                            was any to-dos on the screen. If not, I would create an empty array using JSON.stringify and
                            store the to-do inside. If there was already an array, I would just add to the current array
                            in localStorage.'
                            label='To-Do App'
                            path='https://todo-app-chi-green.vercel.app/'
                            github='https://github.com/alvin-joseph/todo-app'
                        />
                        <CardItems
                            src='images/github-followers.PNG'
                            text='Who follows you on GitHub? Look at your stalk uh..Followers here!'
                            description="A challenge I faced when making this application was 
                            getting two separate requests sent to the GitHub API without multiple requests. One was for the user's information 
                            while another was for the user's followers. I found a solution using Promise.all which
                            ran both requests and returned a single promise containing the data I needed."
                            label='GitHub Followers'
                            path='https://github-followers-omega.vercel.app/'
                            github='https://github.com/alvin-joseph/github-followers'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
