// import * as React from 'react';
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box
      sx={{
        // position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "primary.dark",

        backgroundImage:
          "url(https://mocah.org/uploads/posts/123478-sunset-mountains-nevada-usa-4k.jpg)",

        // width: 1086,
        height: 176,
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      {/* <img
        src="https://mocah.org/uploads/posts/123478-sunset-mountains-nevada-usa-4k.jpg"
        alt=""
       
      /> */}
    </Box>
  );
};

export default Header;
