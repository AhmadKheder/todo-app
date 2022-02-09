import Box from "@mui/material/Box";
import * as React from "react";
import sunset4k from "./sunset4k.jpg";

const Header = () => {
  return (
    <Box
      // align="right"
      sx={{
        // display: "flex",
        width: "100%",
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
