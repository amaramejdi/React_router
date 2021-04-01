import React from 'react';
import { Card } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

 
const MovieCard = ({movie}) => {

    return (
        <div className="cardM">
            <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={movie.posterUrl} />
           <Card.Body>
           <Card.Title>{movie.title}</Card.Title>
           </Card.Body>
           </Card>
        </div>
    )
}

export default MovieCard;