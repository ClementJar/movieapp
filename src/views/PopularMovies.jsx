import {useEffect, useState} from "react";
import {getPopularMovies} from "../services/moviesService";
import MovieGrid from "../components/MovieGrid";
import {useListenForLocation} from "../components/Nav";

export default function PopularMovies() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

    useListenForLocation()
    useEffect(() => {
        getPopularMovies()
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setMovies(result.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    let componentToShow;
    if (error) {
        componentToShow = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        componentToShow = <div>Loading...</div>;
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