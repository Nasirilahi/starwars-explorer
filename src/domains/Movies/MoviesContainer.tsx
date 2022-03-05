import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled, Box, Paper, Grid, Avatar } from "@mui/material";
import { useAppDispatch } from "../../store";
import { fetchMoviesList } from "./redux/MoviesListSlice";
import selectors from "./redux/MoviesSelector";
import { stringAvatar } from "../../utils/stringAvatar";
import ListTemplate from "../../components/ListTemplate";
import Dialog from "../../components/Dialog";

const PeopleListContainer = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [currentSelected, setCurrentSelected] = useState({
    title: "",
    producer: "",
    release_date: "",
    director: "",
  });
  const dispatch = useAppDispatch();
  const moviesList = useSelector(selectors.moviesListSelector);
  const isError = useSelector(selectors.isError);
  const isLoading = useSelector(selectors.isLoading);
  useEffect(() => {
    dispatch(fetchMoviesList());
  }, [dispatch]);
  const handleClickOpen = (item: any) => {
    const { title, director, producer,release_date  } = item;
    setCurrentSelected({ title, director, producer,release_date  } );
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) {
    return <div>Loading.....</div>;
  }
  if (isError) {
    return <div />;
  }
  const { title, ...list } = currentSelected;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ListTemplate
        title={"Movies list"}
        list={moviesList}
        onClick={handleClickOpen}
        isMovieTemplate={true}
      />
       <Dialog onClose={handleClose} open={open} title={title} list={list} showAvatar={false} />
    </Box>
  );
};

export default PeopleListContainer;
