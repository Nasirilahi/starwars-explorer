import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useAppDispatch } from "../../store";
import { fetchMoviesList } from "./redux/MoviesListSlice";
import selectors from "./redux/MoviesSelector";
import ListWrapper from '../../components/ListWrapper';
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
  const nextPage = useSelector(selectors.nextPage);
  const hasNextPage = useSelector(selectors.hasNextPage);
  const loadMore = () => {
    dispatch(fetchMoviesList(nextPage));
  }
  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: isError,
    rootMargin: '0px 0px 400px 0px',
  });
  useEffect(() => {
    dispatch(fetchMoviesList('1'));
  }, [dispatch]);
  const handleClickOpen = (item: any) => {
    const { title, director, producer,release_date  } = item;
    setCurrentSelected({ title, director, producer,release_date  } );
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading && nextPage === '1') {
    return <div>Loading.....</div>;
  }
  if (isError) {
    return <div />;
  }
  const { title, ...list } = currentSelected;
  return (
    <ListWrapper>
      <ListTemplate
        title={"Movies list"}
        list={moviesList}
        onClick={handleClickOpen}
        isMovieTemplate={true}
        shouldLoadMore={isLoading || hasNextPage}
        sentryRef={sentryRef}
      />
       <Dialog onClose={handleClose} open={open} title={title} list={list} showAvatar={false} />
    </ListWrapper>
  );
};

export default PeopleListContainer;
