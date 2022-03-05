import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { LoaderContainer } from "./styles";

const ChunkLoader = () => (
  <LoaderContainer>
    <CircularProgress color="inherit" />
  </LoaderContainer>
);

export default ChunkLoader;
