import React from "react";
import "./Input.css";

const input = ({ onSelectChange }) => {
  return (
    <div className="custom-select">
      <span>Select: </span>
      <select onChange={onSelectChange} value="">
        <option />
        <option value="XL">XL</option>
        <option value="L">L</option>
        <option value="SM">SM</option>
      </select>
    </div>
  );
};

export default input;
