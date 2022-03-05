import React, { Fragment } from "react";
import { styled, Paper, Grid, Avatar } from "@mui/material";
import { stringAvatar } from "../../utils/stringAvatar";
import { Title } from "./styles";

interface listProps {
  title: string;
  list: any;
  onClick: any;
  isMovieTemplate?: boolean;
  shouldLoadMore: boolean;
  sentryRef: any;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  display: "flex",
  alignItems: "center",
}));

const ListTemplate = ({
  title,
  list,
  onClick,
  isMovieTemplate,
  shouldLoadMore,
  sentryRef,
}: listProps) => {
  const style = {
    overflow: "scroll",
    marginBottom: "20px",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    "::-webkit-scrollbar": { display: "none" },
  };
  return (
    <Fragment>
      <Title>{title}</Title>
      <Grid container spacing={2} sx={style}>
        {list.map((item: any, index: any) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Item onClick={() => onClick(item)}>
                {!isMovieTemplate ? (
                  <>
                    <Avatar {...stringAvatar(item.name)} />
                    {item.name}
                  </>
                ) : (
                  <>
                    <Avatar {...stringAvatar(item.director)} />
                    {item.title}
                  </>
                )}
              </Item>
            </Grid>
          );
        })}
        {shouldLoadMore && <div ref={sentryRef}>Loading....</div>}
      </Grid>
    </Fragment>
  );
};

export default ListTemplate;
