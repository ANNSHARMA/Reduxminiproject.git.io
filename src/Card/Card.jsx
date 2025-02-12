import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const Cards = ({ id, name, score }) => {
  return (
    <Card
      sx={{
        maxWidth: 250,
        minWidth: 200,
        margin: "10px",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="https://tse3.mm.bing.net/th?id=OIP.EwG6x9w6RngqsKrPJYxULAHaHa&pid=Api&P=0&h=220"
          alt="player image"
          sx={{ borderRadius: "12px 12px 0 0" }}
        />
        <CardContent sx={{ textAlign: "center", padding: "12px" }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "#333" }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Player ID: {id}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#00796B",
              mt: 1,
              fontSize: "1.2rem",
            }}
          >
            Score: {score}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
