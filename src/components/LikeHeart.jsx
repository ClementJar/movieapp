import {useState} from "react";
import Heart from "./HeartUI";
import {updateLocalStorageLikedState} from "../services/localStorageService";

function isMovieLiked(movieId) {
    return localStorage.getItem(movieId) !== null;
}

export function LikeHeart(props) {
    const [isLiked, setIsLiked] = useState(isMovieLiked(props.id));

    return (
        <div className="heart" onClick={() => {
            updateLocalStorageLikedState(props.id, props.value, isLiked);
            setIsLiked(!isLiked);
        }}>
            <Heart className="heart" isLiked={isLiked}/>
        </div>
    )
}