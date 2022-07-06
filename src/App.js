import './App.css';
import React, {useState, useEffect} from "react" ;
import MoviesList from "./movieslist/MoviesList";
import NavBar from "./navbar/NavBar"; 
import AddMovie from "./modal/AddMovie";
import { data } from "./data";
import MovieItem from './movieItem/MovieItem';

import {   Router, Link, Routes, Route } from "react-router-dom";
import Description from './description/Description';



function App() {
    const [movies, setMovies] = useState(data);
    const [search, setSearch] = useState("");
    const [rate, setRate] = useState(0);
    
    return (
        
       
           
        <div className="App">
            <NavBar setSearch={setSearch} setRate={setRate} rate={rate} />
            <section>
                <AddMovie movies={movies} setMovies={setMovies} />
            </section>
           
           <Routes>

               <Route path= "NavBar" element={<NavBar/>}> </Route>
               <Route path='AddMovie' element= { <AddMovie/>}> </Route> 
               <Route path='/' element= { <MoviesList movies={movies} search={search} rate={rate}/>}> </Route> 
               <Route path='MovieItem' element= { <MovieItem/>}>  </Route> 
               <Route path='SetSearch' element= { <setSearch/>}>  </Route> 
               <Route path='/MovieList/:MovieTitle' element= { <Description/>}>  </Route> 

           </Routes>
        </div>

       
      
    );
}

export default App;
 