import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import React, { useContext } from "react";
import OneDetail from "./OneDetail";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavListContext } from "../../../contexts/FavListContext";

function MovieDetails({ isFav, favFunc }) {
  //write code here
  const { movieObject } = useContext(FavListContext);
  const { Title, Year, imdbRating, Country, Genre, Language, Plot, Runtime } =
    movieObject;
  return (
    <Box>
      <Typography variant="h4" component="h3" color="primary">
        {Title}
      </Typography>
      <Typography variant="h5" component="p" color="primary">
        ({Year})
      </Typography>

      <OneDetail
        title="Movie produced in"
        content={`${Country} - (${Language})`}
      />
      <OneDetail title="Categories" content={Genre} />
      <OneDetail title="Movie is about" content={Plot} />
      <OneDetail title="Movie time" content={Runtime} />
      <OneDetail
        title="Rating"
        content={
          <Box>
            <Grid
              container
              spacing={1.5}
              alignItems="center"
              justifyContent="flex-start"
              ml={2.5}
            >
              <Grid item>
                <Typography component="span" variant="h6" color="text.primary">
                  {imdbRating}
                </Typography>
              </Grid>
              <Grid item>
                <Rating
                  name="customized-10"
                  defaultValue={Number(imdbRating)}
                  precision={0.1}
                  max={10}
                  readOnly
                />
              </Grid>
            </Grid>
          </Box>
        }
      />

      <Button
        fullWidth
        variant="contained"
        onClick={favFunc}
        color="primary"
        endIcon={isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      >
        {isFav ? "Remove from favorite" : "Add to favorite"}
      </Button>
    </Box>
  );
}

export default MovieDetails;
