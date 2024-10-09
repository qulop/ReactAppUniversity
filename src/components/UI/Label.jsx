import React from "react";
import "./Label.css"


const Label = ({children: child, ...props}) => {
  return (
    <label className="basic-label">
      {child}
    </label>
  )
}


export default Label;