import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useAppDispatch } from "../../store";
import { fetchPlanetsList } from "./redux/PlanetListSlice";
import selectors from "./redux/PlanetListSelector";
import ListTemplate from "../../components/ListTemplate";
import Dialog from "../../components/Dialog";

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
  useEffect(() => {
    dispatch(fetchPlanetsList());
  }, [dispatch]);

  const handleClickOpen = (item: any) => {
    const { name, terrain, population } = item;
    setCurrentSelected({ name, terrain, population });
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
    <Box sx={{ flexGrow: 1 }}>
      <ListTemplate
        title={"Planets list"}
        list={planetsList}
        onClick={handleClickOpen}
      />
      <Dialog onClose={handleClose} open={open} title={name} list={list} showAvatar={true} />
    </Box>
  );
};

export default PlanetListContainer;
