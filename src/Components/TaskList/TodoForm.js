// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import * as React from "react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import "./TaskList.css";

export default function TodoForm(props) {
  const { register, handleSubmit } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState({});
  const onSubmit = (data, e) => {
    e.preventDefault();
    setData({
      ...e,
    });
    props.pull_typed_todo(data);

    console.log(data, e);
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="add-form">
      <input
        required
        placeholder="Todo Title"
        style={{
          border: "1px solid #FFB520",
        }}
        {...register("title")}
      />

      <input
        style={{
          border: "1px solid #FFB520",
        }}
        type={"date"}
        {...register("date")}
      />
      <button
        style={{
          borderRadius: "8px",
          // margin: "10px",
          width: "92px",
          height: "64px",
          backgroundColor: "#FFC420",
          border: "1px solid #ffff",
          fontFamily: "Segoe UI",
          fontWeight: "600",
          fontSize: "13px",
          lineHeight: "16px",
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
