import {useEffect, useState} from "react";
// import Heart from "react-animated-heart";

function getData(movies) {

    return movies.map(movie => ({
        id: movie.id,
        name: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview: movie.overview,
        original_language: movie.original_language,
        backdrop_path: movie.backdrop_path,
    }))
}

// function LikeMovie(props){
//     const [isClick, setClick] = useState(false)
//     return (
//         <div className="heart" >
//             <Heart isClick ={isClick} onClick ={() => setClick(!isClick)}/>
//         </div>
//     )
// }

export default function GetMovies() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

// fetch movies to be used
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17")
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
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        const movieData = getData(movies);
        return (
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div
                        className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {movieData.map((movie) => (
                            <a key={movie.id} href={movie.href} className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img
                                        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                                        alt={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                                    />
                                    {/*<LikeMovie />*/}
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{movie.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{movie.release_date}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
