import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useAppDispatch } from "../../store";
import { fetchPlanetsList } from "./redux/PlanetListSlice";
import selectors from "./redux/PlanetListSelector";
import ListWrapper from '../../components/ListWrapper';
import ListTemplate from "../../components/ListTemplate";
import Dialog from "../../components/Dialog";
import {ChunkLoader} from '../../components/Loader';

const PlanetListContainer = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [currentSelected, setCurrentSelected] = useState({
    name: "",
    terrain: "",
    population: "",
  });
  const dispatch = useAppDispatch();
  const planetsList = useSelector(selectors.planetsListSelector);
  const isError = useSelector(selectors.isError);
  const isLoading = useSelector(selectors.isLoading);
  const nextPage = useSelector(selectors.nextPage);
  const hasNextPage = useSelector(selectors.hasNextPage);
  const loadMore = () => {
    dispatch(fetchPlanetsList(nextPage));
  }
  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: isError,
    rootMargin: '0px 0px 400px 0px',
  });
  useEffect(() => {
    dispatch(fetchPlanetsList('1'));
  }, [dispatch]);

  const handleClickOpen = (item: any) => {
    const { name, terrain, population } = item;
    setCurrentSelected({ name, terrain, population });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  if (isLoading && nextPage === '1') {
    return <ChunkLoader />;
  }
  if (isError) {
    return <div />;
  }
  const { name, ...list } = currentSelected;
  return (
    <ListWrapper>
      <ListTemplate
        title={"Planets list"}
        list={planetsList}
        onClick={handleClickOpen}
        shouldLoadMore={isLoading || hasNextPage}
        sentryRef={sentryRef}
      />
      <Dialog onClose={handleClose} open={open} title={name} list={list} showAvatar={true} />
    </ListWrapper>
  );
};

export default PlanetListContainer;
