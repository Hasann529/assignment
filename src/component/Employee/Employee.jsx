import React, { useState } from "react";
import "./Employee.scss";
import DetailForm from "./DetailForm";

const Employee = () => {
  const [image, setImage] = useState("./Profile.png");

  const imageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="employee">
      <h3>Employer Information</h3>
      <div>
        <img src={image} alt="dp" />
        <input type="file" accept="image/*" onChange={imageChange} />
      </div>
      <DetailForm />
    </div>
  );
};

export default Employee;
