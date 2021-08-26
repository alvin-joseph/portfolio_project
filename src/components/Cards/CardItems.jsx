import React from 'react'

function CardItems(props) {
    return (
        <div>
            <li className="cards__item">
                <div className="cards__item__link">
                    <a href={props.path} target="_blank" rel="noreferrer">
                        <figure className="cards__item__pic-wrap" data-category={props.label}>
                            <img src={props.src} alt="my project" className="cards__item__img" />
                        </figure>
                    </a>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                        <h4 className="cards__item__desc">{props.description}</h4>
                        <a href={props.github} target="_blank" rel="noreferrer" className="cards__item__git" >
                            <img src="images/github.png" alt="GitHub" />
                        </a>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default CardItems
