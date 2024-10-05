import React from "react";
import "./../styles/Button.css"


function _addNonExistentProperties(target, src) {
  Object.keys(src)
    .forEach(key => {
      if (!target.hasOwnProperty(key)) {
        target[key] = src[key]
      }
  })
}


const Button = ({title, ...props}) => {
  const buttonStyle = {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    fontSize: "15px",
    padding: "8px 10px",
    borderRadius: "3px",
    textAlign: "center"
  }

  if (props.hasOwnProperty("style")) {
    _addNonExistentProperties(buttonStyle, props.style)
  }

  return (
    <div>
      <button style={buttonStyle}>{title}</button>
    </div>
  )
}


export default Button;