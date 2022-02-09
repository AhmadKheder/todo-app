import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TodayIcon from "@mui/icons-material/Today";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";
import TodoForm from "./TodoForm";

// const rows = [
//   { id: 1, taskTitle: "Task1", taskDesc: "Task1Task1", taskDate: 35 },
//   { id: 2, taskTitle: "Task2", taskDesc: "Task2Task2", taskDate: 35 },
//   { id: 3, taskTitle: "Task3", taskDesc: "Task3Task3", taskDate: 35 },
//   { id: 4, taskTitle: "Task4", taskDesc: "Task4Task4", taskDate: 35 },
// ];

const TaskList01 = () => {
  // const { register, handleSubmit } = useForm();

  const handel_pull_typed_todo = (data) => {
    setTodos([...todos, data]);
    localStorage.setItem("data", todos);
  };
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: "Take CSS Course",
      date: "Today1",
      status: false,
    },
    {
      id: 2,
      title: "Update all libraries",
      date: "Today2",
      status: true,
    },
    {
      id: 3,
      title: "Review the Code",
      date: "Today3",
      status: false,
    },
  ]);
  const handleTodoAccomblish = (event) => {
    event.preventDefault();
    const todo = event.target;
    const clickedTodo = todos.find(todo.id);
    clickedTodo.status = !clickedTodo.status;

    // const clickedTodo = todos.find((acc) => {
    //   if (acc.id == todo.id) {
    //     return (acc.status = !acc.status);
    //   }
    // });

    // todo.checked = todo.checked ? false : true;
    if (todo.checked) {
    }
  };
  return (
    <>
      <TableContainer
        sx={{ maxWidth: 1000, marginLeft: 50, marginTop: 5 }}
        component={Paper}
      >
        <div
          style={{
            borderStyle: "none",
            border: 0,
            margin: 5,
            display: "flex",
            justifyContent: "space-between",
          }}
          className="titles-container"
        >
          <Typography sx={{}}>Task List</Typography>
          <Typography sx={{}}>Due Date</Typography>
        </div>

        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead></TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <Radio
                      sx={{
                        // padding: 5,

                        "&:hover": {
                          bgcolor: "transparent",
                        },
                        color: "#FFB520",
                        width: "24px",
                        height: "24px",
                      }}
                      name={todo.title}
                      onChange={(event) => {
                        handleTodoAccomblish(event);
                      }}
                      id={todo.id}
                      value={todo.title}
                    />
                    <InputLabel
                      name={todo.title}
                      id={todo.id}
                      sx={{
                        paddingLeft: 2,
                      }}
                    >
                      {todo.title}
                    </InputLabel>
                  </div>
                </TableCell>
                <TableCell sx={{}} align="right">
                  <TodayIcon fontSize="x-sm" />
                  <Typography sx={{}}>{todo.date}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table>
          <TableBody>
            <TableRow>
              {/* <TableCell variant="context.table.footer"> */}
              <Accordion component={Paper}>
                <AccordionSummary
                  component={Paper}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Button
                    sx={{
                      left: 22,
                      height: 77,
                      color: "#555B77",
                      backgroundColor: "#FFFFFF",
                      "&:hover": {
                        background: "#FFFFFF",
                      },
                    }}
                    startIcon={<AddIcon />}
                  >
                    New Task
                  </Button>
                </AccordionSummary>

                <AccordionDetails component={Paper}>
                  <TodoForm pull_typed_todo={handel_pull_typed_todo} />
                </AccordionDetails>
              </Accordion>
              {/* </TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TaskList01;
