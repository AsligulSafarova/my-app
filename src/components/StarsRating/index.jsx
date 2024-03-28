import React from 'react';
import Rating from 'react-rating-stars-component';


export default function StarsRating({ rating }) {

    return (
        <Rating
            count={rating}
            size={44}
            value={rating}
            Color="#FFA500"
            edit={true}
            allowHalf

        />
    )
}
