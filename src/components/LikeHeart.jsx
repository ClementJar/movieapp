import {useState} from "react";
import {updateLocalStorageLikedState} from "../data/useLocalStorage";
import Heart from "./HeartUI";

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