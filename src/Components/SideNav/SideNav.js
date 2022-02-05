import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
const drawerWidth = 240;

const SideNav = (props) => {
  const drawer = (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CheckBoxSharpIcon
          sx={{
            position: "absolute",
            width: "40px",
            height: "40px",
            left: "4px",
            top: "24px",
            color: "#FFB520",
            // background: "#FFFF",
            borderRadius: "8px !important",
          }}
        />
        <h1>To Do App</h1>
      </div>

      <Divider />
      <List>
        {[
          ["Today", <EventAvailableIcon />],
          ["All Tasks", <DoneAllIcon />],
          ["To Do", <AssignmentTurnedInIcon />],
        ].map((text, index) => (
          <ListItem
            button
            key={text[0]}
            sx={{
              borderRadius: "8px",
              margin: "10px",
              width: "222px",
              "&:hover ,:active": {
                borderRadius: "8px",
                margin: "10px",
                width: "222px",
                backgroundColor: "#FFB520",
              },
            }}
          >
            <ListItemIcon>{text[1]}</ListItemIcon>
            <ListItemText primary={text[0]} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default SideNav;
