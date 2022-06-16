export function updateLocalStorageLikedState(movieId, movie, isMovieLiked) {
    if (isMovieLiked) {
        localStorage.removeItem(movieId);
    } else {
        localStorage.setItem(movieId, JSON.stringify(movie));
    }
}
