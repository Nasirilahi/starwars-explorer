import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { fetchPeopleList } from "./redux/PeopleListSlice";
import selectors from "./redux/PeopleListSelector";

const PeopleListContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const peoplesList = useSelector(selectors.peopleListSelector);
  const isError = useSelector(selectors.isError);
  const isLoading = useSelector(selectors.isLoading);
  useEffect(() => {
    dispatch(fetchPeopleList());
  }, [dispatch]);
  if(isLoading){
      return <div>Loading.....</div>;
  }
  if(isError) {
      return <div />;
  }
  return (
    <div>
      Poeple list
      {peoplesList.map((peopleItem, index) => {
        return (
          <div key={index} style={{ display: "flex", flexDirection: "row" }}>
            <div>{peopleItem.name}</div> <div>{peopleItem.gender}</div>{" "}
            <div>{peopleItem.height}</div> <div>{peopleItem.mass}</div>
            <div>{peopleItem.hair_color}</div> <div>{peopleItem.skin_color}</div>
            <div>{peopleItem.birth_year}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PeopleListContainer;
