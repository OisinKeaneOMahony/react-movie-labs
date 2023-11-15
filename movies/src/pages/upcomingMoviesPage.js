import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage"
import { getUpcoming } from "../api/tmdb-api"
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const UpcomingMoviesPage = (props) => {
    const [ movies, setMovies ] = useState([]);
    const favorites = movies.filter((m) => m.favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    useEffect(() => {
        getUpcoming().then(movies => {
            setMovies(movies);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            action={(movie) => {
                return <AddToFavoritesIcon movie={movie} />
            }}
        />
    );
};

export default UpcomingMoviesPage;