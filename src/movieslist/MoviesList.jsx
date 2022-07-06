import React from "react";
import { Outlet } from "react-router-dom";
import MovieItem from "../movieItem/MovieItem";
import "./MoviesList.css";

function MoviesList(props) {
    return (
        <div className="movies-container">
            <div className="movies-list">
            
                {props.movies
                    .filter((movie) =>
                        props.rate && !props.search
                            ? movie.rate === props.rate
                            : props.search && !props.rate
                            ? movie.title.toLowerCase().includes(props.search)
                            : props.rate && props.search
                            ? movie.title
                                  .toLowerCase()
                                  .includes(props.search) &&
                              movie.rate === props.rate
                            : movie.title.toLowerCase().includes(props.search)
                    )
                    .map((movie) => {
                        return <MovieItem key={movie.id} {...movie} />;
                    })}
            </div>
            <Outlet/>
        </div>
    );
}

export default MoviesList;


