import MovieGrid from "../components/MovieGrid";
import {getLikedMovies} from "../services/moviesService";

export default function LikedMovies() {
    const savedItems = getLikedMovies();
    return (
        <div className="min-h-full">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Liked Movies</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                        <MovieGrid movies={savedItems}/>
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </div>
    );
}