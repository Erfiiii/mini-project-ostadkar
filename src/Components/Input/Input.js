import React from "react";
import "./Input.css";

// FOR RETURNING THE ARRAY FROM ITERATING
const foo = (input) => {
  const vals = []
  input.forEach((value, key) => {
      vals.push (<option key={key} value={key}>{key}</option>)
    }
  )
  return vals
}

const input = ({ onSelectChange, layout }) => {
  return (
    <div className="custom-select">
      <span>Select: </span>
      <select onChange={onSelectChange} value="">
        {
          foo(layout)                
        }
      </select>
    </div>
  );
};

export default input;
