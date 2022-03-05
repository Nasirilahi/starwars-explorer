import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  // const nextPage = useSelector(selectors.nextPage);
  // const hasNextPage = useSelector(selectors.hasNextPage);
  useEffect(() => {
    dispatch(fetchPeopleList(9));
  }, []);

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
  if (isLoading) {
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
