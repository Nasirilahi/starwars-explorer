import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useAppDispatch } from "../../store";
import { fetchPeopleList } from "./redux/PeopleListSlice";
import selectors from "./redux/PeopleListSelector";
import ListWrapper from '../../components/ListWrapper';
import ListTemplate from "../../components/ListTemplate";
import Dialog from "../../components/Dialog";

const PeopleListContainer = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [currentSelected, setCurrentSelected] = useState({
    name: "",
    gender: "",
    height: "",
    birth_year: "",
    hair_color: "",
    skin_color: "",
    mass: "",
  });
  const dispatch = useAppDispatch();
  const peoplesList = useSelector(selectors.peopleListSelector);
  const isError = useSelector(selectors.isError);
  const isLoading = useSelector(selectors.isLoading);
  const nextPage = useSelector(selectors.nextPage);
  const hasNextPage = useSelector(selectors.hasNextPage);
  console.log('nextPage', nextPage, typeof nextPage);
  const loadMore = () => {
    dispatch(fetchPeopleList(nextPage));
  }
  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: isError,
    rootMargin: '0px 0px 400px 0px',
  });

  useEffect(() => {
    dispatch(fetchPeopleList('1'));
  }, [dispatch]);

  const handleClickOpen = (peopleItem: any) => {
    const { name, gender, height, birth_year, hair_color, skin_color, mass } =
      peopleItem;
    setCurrentSelected({
      name,
      gender,
      height,
      birth_year,
      hair_color,
      skin_color,
      mass,
    });
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
  const { name, ...list } = currentSelected;
  return (
    <ListWrapper>
      <ListTemplate
        title={"People List"}
        list={peoplesList}
        onClick={handleClickOpen}
        shouldLoadMore={isLoading || hasNextPage}
        sentryRef={sentryRef}
      />
      <Dialog
        onClose={handleClose}
        open={open}
        title={name}
        list={list}
        showAvatar={true}
      />
    </ListWrapper>
  );
};

export default PeopleListContainer;
