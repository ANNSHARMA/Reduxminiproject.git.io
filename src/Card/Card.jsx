import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const Cards = ({id, name, score}) =>{
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="40"
          image="https://tse3.mm.bing.net/th?id=OIP.EwG6x9w6RngqsKrPJYxULAHaHa&pid=Api&P=0&h=220"
          // alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div">
            {id}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {score}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards;