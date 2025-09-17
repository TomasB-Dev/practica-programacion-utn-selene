import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const MovieCard = ({id, title, image, director, release_date }) => {
  return (
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
          {director}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {release_date}
        </Typography>
      </CardContent>
      <CardActions>
        <Link  to={`/${id}`}>Ver Mas</Link>
      </CardActions>
    </Card>
)
}

export default MovieCard