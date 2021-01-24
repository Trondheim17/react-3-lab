import React from 'react'
import Counter from './counter'

const Card =(props) => {
        return (
            <div className = 'Card'>
                <Counter index={props.person.id}/>
                <h1>{`${props.person.name.first} ${props.person.name.last}`}</h1>
                <div className='info'>
                    <p>From: {props.person.city}, {props.person.country}</p>
                    <p>Job Title: {props.person.title}</p>
                    <p>Employer: {props.person.employer}</p>
                </div>
                <ol className='favs'>Favorite Movies:
                    <li className='favs movie'>{props.person.favoriteMovies[0]}</li>
                    <li className='favs movie'>{props.person.favoriteMovies[1]}</li>
                    <li className='favs movie'>{props.person.favoriteMovies[2]}</li>
                </ol>
            </div>
        )
}

export default Card