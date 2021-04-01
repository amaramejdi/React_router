import React, { useState } from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
 
const AddMovie = ({show, handleClose, addNewMovie}) => {
     const [newmovie, setNewmovie] = useState({
         title:"",
         description:"",
         rate:0,
         posterUrl:"",
     });

     const handleChange = (e) => {
      setNewmovie({...newmovie, [e.target.name]:e.target.value});
     };

    return (
        <div>
            <Modal show={show}>
            <Modal.Header closeButton>
            <Modal.Title>Add a new Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
               <Form.Group>
               <Form.Label>Movie Title</Form.Label>
               <Form.Control type="text" placeholder="Enter Movie Title" name="title" onChange={handleChange}/>
               <Form.Label>Movie Description</Form.Label>
               <Form.Control type="text" placeholder="Enter Movie Description" name="description" onChange={handleChange} />
               <Form.Label>Movie Poster</Form.Label>
               <Form.Control type="text" placeholder="Enter Movie Poster" name="posterUrl" onChange={handleChange} />
               <Form.Label>Movie Rate</Form.Label>
               <Form.Control type="number" placeholder="Enter Movie Rate" name="rate" onChange={handleChange} />
               </Form.Group>
               </Form>
            </Modal.Body>
           <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={()=>{
            handleClose();
            addNewMovie(newmovie);
            }}>
            Add Movie
            </Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMovie;