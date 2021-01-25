import React from 'react'
import Counter from './counter'

const Card =(props) => {
        return (
            <div className = 'Card'>
                <Counter index={props.person.id}/>
                <h1>{`${props.person.name.first} ${props.person.name.last}`}</h1>
                <div className='info'>
                    <p className='about'> <strong>From: </strong> {props.person.city}, {props.person.country}</p>
                    <p className='about'> <strong>Job Title: </strong> {props.person.title}</p>
                    <p className='about'><strong>Employer: </strong> {props.person.employer}</p>
                </div>
                <ol className='favs'><strong>Favorite Movies: </strong>
                    <li className='movie'>{props.person.favoriteMovies[0]}</li>
                    <li className='movie'>{props.person.favoriteMovies[1]}</li>
                    <li className='movie'>{props.person.favoriteMovies[2]}</li>
                </ol>
            </div>
        )
}

export default Card