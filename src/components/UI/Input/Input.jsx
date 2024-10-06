import React from "react";
import idList from "./Input.module.css"


const Input = (props) => {
  return (
      <input id={idList.Input} type="text" {...props}/>
  )
}


export default Input;