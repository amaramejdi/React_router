import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import StarRatingComponent from 'react-star-rating-component';


const Description = (props) => {
    const[movie, setMovie]=useState(null);
    useEffect(()=>{
        setMovie(props.movies.filter(el=>el.id === props.match.params.id)[0]);
    });
    return (
        <div className="cardM">  
        {movie && (
             <Card style={{ width: '18rem'}}>
           <Card.Body>
           <Card.Title>{movie.title}</Card.Title>
           <Card.Text>{movie.description}</Card.Text>
           <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={movie.rate}
        />
           </Card.Body>
           </Card>)}
        </div>
    )
}

export default Description;