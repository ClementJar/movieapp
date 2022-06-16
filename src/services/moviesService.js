export function getPopularMovies() {
    return fetch("https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17");
}

export function getLikedMovies() {
    let savedItems = {...localStorage};
    if (!savedItems) {
        return []
    }
    return Object.keys(savedItems).map((key) => [savedItems[key]]).map((item) => JSON.parse(item));

}