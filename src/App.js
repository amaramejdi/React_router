import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './profile/MovieList';
import FilterMovie from './profile/FilterMovie';
import {BrowserRouter, Route} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Description from './profile/Description';

const App = props => {
  const[movies,setMovies] = useState([
    { id:uuidv4(),
      title: "Jumanji",
    description: "Everything you know about Jumanji is about to change. Watch the trailer for #JUMANJI​​: The Next Level. Now on Disc and Digital",
    posterUrl: "https://i.ytimg.com/vi/MJuFdpVCcsY/movieposter_en.jpg",
    rate: 4},

    {id:uuidv4(),
      title: "Chicago 7",
    description: "Lorsque la manifestation en marge de la convention démocrate de 1968 tourne à l'affrontement, ses organisateurs sont accusés de conspiration et d'incitation à la révolte",
    posterUrl: "https://fr.web.img6.acsta.net/pictures/20/09/14/07/20/3234061.jpg",
    rate: 2},

    {id:uuidv4(),
      title: "Spenser",
    description: "The film was announced in 2018 as an adaptation of the 2013 novel Robert B. Parker's Wonderland by author Ace Atkins. It was released on March 6, 2020, by Netflix[2] to mixed reviews.",
    posterUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFrxG0UZ26rVH5e_j8AyRONVgz92hshsgGTKXdxvETtIEHzbTw",
    rate: 5},
  ]);


const addNewMovie = (newMovie) =>{
  setMovies(movies.concat(newMovie));
};

const [keyWord, setKeyWord] = useState("");
const [keyRate, setKeyRate] = useState(1);

const search = (word) => {
  setKeyWord(word);
}
  
    return( 
    <div className="master"> 
      <BrowserRouter>
      <h1>Movies</h1>
      <FilterMovie keyRate={keyRate} setKeyRate={setKeyRate} search={search} />
       <MovieList 
       movies={movies.filter((movie) => movie.rate >= keyRate && movie.title.toLowerCase().includes(keyWord.toLowerCase().trim()))} 
       addNewMovie={addNewMovie} />

      <Route path="/movie/:id" render={(props)=><Description {...props} movies={movies}/>}/>

      </BrowserRouter>
    </div>
      );
  };
 
 
export default App;