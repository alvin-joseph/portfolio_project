import React from 'react'

function CardItems(props) {
    return (
        <div className="card_item">
            <li className="cards__item">
                <div className="cards__item__link">
                    <a href={props.path} target="_blank" rel="noreferrer">
                        <figure className="cards__item__pic-wrap" data-category={props.label}>
                            <img src={props.src} alt="my project" className="cards__item__img" />
                        </figure>
                    </a>
                    <div className="cards__item__info">
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
