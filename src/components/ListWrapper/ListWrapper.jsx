import React from "react";
import { Box } from "@mui/material";

const ListWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: "hidden",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default ListWrapper;
