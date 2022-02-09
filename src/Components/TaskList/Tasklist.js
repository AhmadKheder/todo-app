import { Box } from "@mui/material";
import Radio from "@mui/material/Radio";
// import { useDemoData } from "@mui/x-data-grid-generator";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import "./TaskList.css";
// const rows = [
//   { id: 1, taskTitle: "Task1", taskDesc: "Task1Task1", taskDate: 35 },
//   { id: 2, taskTitle: "Task2", taskDesc: "Task2Task2", taskDate: 35 },
//   { id: 3, taskTitle: "Task3", taskDesc: "Task3Task3", taskDate: 35 },
//   { id: 4, taskTitle: "Task4", taskDesc: "Task4Task4", taskDate: 35 },
// ];

const rows = [
  { id: 1, taskTitle: "Task1", taskDate: "date" },
  { id: 2, taskTitle: "Task2", taskDate: "date2" },
  { id: 3, taskTitle: "Task3", taskDate: "date3" },
  { id: 4, taskTitle: "Task4", taskDate: "date4" },
  { id: 5, taskTitle: "Task5", taskDate: "date5" },
];
let radioChecked = [rows[0].id];
const columns = [
  {
    field: "radiobutton",
    headerName: "",
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <Radio checked={radioChecked[0] === params.id} value={params.id} />
    ),
  },

  {
    field: "taskTitle",
    headerName: "",
    width: 150,
  },
  {
    field: "taskDate",
    headerName: "",
    width: 150,
  },
];

const TaskList = () => {
  const [selectionModel, setSelectionModel] = React.useState(radioChecked);
  radioChecked = selectionModel;

  const selectedRow = rows.filter((item) => {
    return item.id === selectionModel[0];
  });

  return (
    <div className="TaskList">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Task List</Typography>
        <Typography>Due Date</Typography>
      </Box>
      <DataGrid
        sx={{ left: 100 }}
        rows={rows}
        columns={columns}
        autoHeight
        selectionModel={selectionModel}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
      />
      <div style={{ marginTop: "40px" }}>
        You have selected: {selectedRow[0].taskTitle} {selectedRow[0].taskDate}
      </div>
    </div>
  );
};

export default TaskList;
