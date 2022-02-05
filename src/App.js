// import { Container } from "@mui/material";
import "./App.css";
import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNav/SideNav";
// import TaskList01 from "./Components/TaskList/Tasklist01";
import TaskList01 from "./Components/TaskList/TaskList01";

function App() {
  return (
    <div className="App">
      <div className="aside">
        <SideNav />
      </div>
      <div className="header-body-flex">
        <Header />
        <TaskList01 />
      </div>
    </div>
  );
}

export default App;
