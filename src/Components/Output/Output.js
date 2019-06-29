import React from "react";
import "./Output.css";

const output = ({item, i})=>{
  return (
    <div className={"item-" + item.name} key={i}>
      {item.name + (i + 1)}
    </div>
  )
}

export default output;