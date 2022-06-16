import {useEffect, useState} from "react";
import {getPopularMovies} from "../services/moviesService";
import MovieGrid from "../components/MovieGrid";

export default function PopularMovies() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies()
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setMovies(result.results);
                    setError(null);
                },
                (error) => {
                    setIsLoaded(true);
                    setMovies([]);
                    setError(error);
                }
            );
    }, []);

    let componentToShow;
    if (!isLoaded) {
        componentToShow = <PopularMoviesLoading />
    } else if (error != null) {
        componentToShow = <div> Error: {error.message}</div>
    } else {
        componentToShow = <MovieGrid movies={movies}/>;
    }

    return (
        <div className="min-h-full">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Popular Movies</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        {componentToShow}
                    </div>
                </div>
            </main>
        </div>
    );
}

function PopularMoviesLoading() {
    return <div className="popular-movies-loading">
        <h4>Loading...</h4>
    </div>
}