import React, { useEffect, useState } from 'react'
import MovieCard from '../ItemMovie/MovieCard';
import { Container } from 'react-bootstrap';
import { Box } from '@mui/material';

const MoviesContainer = () => {
const [movies, setMovies]= useState([]);
const [isLoading, setIsLoading] = useState(true);



    useEffect(()=>{
        fetch("https://ghibliapi.vercel.app/films/")
        .then(res=> res.json())
        .then((data)=> 
        setMovies(data),
        setTimeout(()=> {
        setIsLoading(false)

        }, 2000)
    );
    }, [])


    if (isLoading) return 
    <Box sx={{height:"100vh", textAlign:"center"}}>
        <Box>Cargando...</Box>
    </Box>

  return (
    <Box sx={{display: "flex", flexWrap:"wrap", gap:1, justifyContent:'center'}}>
        {movies.slice(0, 5).map((movie)=> (
            <MovieCard key={movie.id} id={movie.id} director={movie.director} title={movie.title} image={movie.image}/>
        ))}
    </Box>
)
}

export default MoviesContainer