import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import {useNavigate} from "react-router-dom";
import React from 'react';

export default function CustomCard({component, name, cardActions, ...props}) {
  const navigate = useNavigate();
    return (
        <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography component={'span'} variant={'body2'}>
                      {component}
                    </Typography>
                  </CardContent>
                  <CardActions>
                      {cardActions}
                  </CardActions>
                </Card>
    );
}