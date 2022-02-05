import * as React from "react";
import Box from "@mui/material/Box";
import sunset4k from "./sunset4k.jpg";
import { positions } from "@mui/system";

const Header = () => {
  return (
    <Box
      // align="right"
      sx={{
        display: "flex",
        height: 176,
        backgroundImage: `url(${sunset4k})`,
        boxSizing: "border-box",
        objectFit: "cover !important",
      }}
    >
      <img
        // src={sunset4k}
        alt=""
        sx={{
          objectFit: "cover !important",
        }}
      />
    </Box>
  );
};

export default Header;
