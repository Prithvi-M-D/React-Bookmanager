import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div class="container">
        <div className="wrapper">
          <img src="../Bookmark.png" alt="Company logo"></img>
        </div>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" href="#text-buttons">
            SIGN IN
          </Button>
          <Button variant="contained" href="#text-buttons">
            REGISTER
          </Button>
        </Stack>
      </div>
      <div class="gridcontainer">
        <div class="item1">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>
        <div class="item2">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="D:/todolist/todo/src/pink watercolor bookmarks.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Messed Up BookMarks?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
