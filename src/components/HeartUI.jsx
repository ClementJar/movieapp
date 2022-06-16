import React from "react";

export default function Heart({isLiked}) {
    let className = "like-heart";
    if (isLiked) {
        className += " liked";
    }
    return <div className={className}></div>;
}
