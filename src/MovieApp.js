import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';

class MovieApp extends Component{


    constructor(){
        super();
        console.log('Constructor ran :)');
        this.state = { movieData: []}
    }


    componentDidMount(){
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
        console.log("Component Mounted!!");
        fetch(url).then((response)=>{
            return response.json()
        }).then ((movieJSON)=>{
            console.log(movieJSON)
            this.setState({
                movieData: movieJSON.results
            })
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log("user submitted form")
        const userMovie = document.querySelector('#search-term').value;
        console.log(userMovie);
        const searchUrl = `http://api.themoviedb.org/3/search/movie?query=${userMovie}&api_key=fec8b5ab27b292a68294261bb21b04a5`;
        const movieData = axios.get(searchUrl);


        movieData.then((resp) => {
            console.log(resp.data);
            this.setState({
                movieData: resp.data.results
            })
        })
    }

    render() {
        console.log("Component Rendered!!")
        console.log(this.state.movieData);
        const movies = this.state.movieData.map((movie, i)=> {
            return(
                <Movie key={i} movie={movie} />
            )
        })


        return(
            <div className="card-panel blue darken-2">
                    <form onSubmit={this.handleSubmit}>
                        <input id="search-term" type="text" placeholder="enter a movie title" />
                        <input type="submit" className="btn" value="Go!"/>
                    </form>
                <div className="container">
                    <div className="row">
                        {movies}
                </div>
                    </div>
            </div>
        )
    }
}
export default MovieApp;