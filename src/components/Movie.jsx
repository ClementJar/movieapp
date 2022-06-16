import {LikeHeart} from "./LikeHeart";

export default function Movie(props) {
    const movie = props.movie;

    return (
        <a key={movie.id} href={movie.href} className="group">
            <div
                className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <LikeHeart id={movie.id} value={movie}/>
                <img
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                    className="w-full h-full object-center object-cover"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{movie.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{movie.release_date}</p>
        </a>
    )
}