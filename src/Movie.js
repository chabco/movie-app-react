// The very first thing, import React in a new component
import React from 'react';

function Movie(props){
    const imagePath = `http://image.tmdb.org/t/p/w300${props.movie.poster_path}`;
    const moviePath = `http://www.themoviedb.org/movie/${props.movie.id}`;

    return(
        <div className="col s6 center">
            <div className="card pink lighten-2">
            <a href={moviePath}>
                <img alt={props.movie.title} src={imagePath} />
            </a>
            <div className="card-panel">
                {props.movie.title}
            </div>
            </div>
        </div>
    )
}

export default Movie;