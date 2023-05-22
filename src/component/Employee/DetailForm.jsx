import React, { useState } from "react";
import "./DetailForm.scss";
import { DatePicker } from "rsuite";

const genderArray = [
  { title: "Gender", value: "" },
  { title: "Male", value: "male" },
  { title: "Female", value: "female" },
  { title: "Other", value: "other" },
];
const positionArray = [{ title: "Position", value: "" }];

const depArray = [{ title: "Select Department", value: "" }];

const DetailForm = () => {
  const [data, setData] = useState({
    first: "",
    last: "",
    birthDate: "",
    gender: "",
    address: "",
    position: "",
    startDate: "",
    dep: "",
  });

  const Submit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form className="detail-form" onSubmit={Submit}>
      <div className="fields">
        <input
          type="text"
          placeholder="First Name"
          name="first"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last"
          onChange={changeHandler}
        />
      </div>
      <div className="fields">
        <DatePicker
          className="date-picker"
          appearance="default"
          placeholder="Birth Date"
          onChange={(date) => {
            const dateString = new Date(date).toLocaleDateString();
            setData({ ...data, birthDate: dateString });
          }}
        />
        <select onChange={changeHandler} name="gender">
          {genderArray.map((i) => (
            <option key={i.title} value={i.value}>
              {i.title}
            </option>
          ))}
        </select>
      </div>
      <div className="fields">
        <input
          type=""
          placeholder="Address"
          name="address"
          onChange={changeHandler}
        />
        <select onChange={changeHandler} name="position">
          {positionArray.map((i) => (
            <option key={i.title} value={i.value}>
              {i.title}
            </option>
          ))}
        </select>
      </div>
      <div className="fields">
        <DatePicker
          className="date-picker"
          appearance="default"
          placeholder="Start Date"
          onChange={(date) => {
            const dateString = new Date(date).toLocaleDateString();
            setData({ ...data, startDate: dateString });
          }}
        />
        <select onChange={changeHandler} name="dep">
          {depArray.map((i) => (
            <option key={i.title} value={i.value}>
              {i.title}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default DetailForm;
