import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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

  //   props.func("My name is Dean Winchester & this is my brother Sammie");

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register("title")} />
      <input {...register("date")} />
      <input type={"date"} {...register("date")} />
      <button type="submit">Submit</button>
    </form>
  );
}
