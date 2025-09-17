import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        fetch(`https://ghibliapi.vercel.app/films/${id}`)
        .then(res=> res.json())
        .then((data)=> setMovie(data)
    ,
    setTimeout(()=> {
        setIsLoading(false)
    }, 3000)
)

    },[id])
    

     if (isLoading) return <Box sx={{height:"100vh" , textAlign:'center'}}>
            <Box>Cargando...</Box>
        </Box>
    
    return (
    <>
    <Box>
        <Box component="img" src={movie.image}>
        </Box>
        <Box>
            <Typography variant='h1' >
                {movie.title}
            </Typography>
            <Typography variant='h3'>
                {movie.director}
            </Typography>
            <Typography>
                {movie.release_date}
            </Typography>
        </Box>
    </Box>    
    </>
    )
}

export default MovieDetail