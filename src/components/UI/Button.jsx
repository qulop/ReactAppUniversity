import React, { useState } from "react";
import styled from "styled-components";


function _addNonExistentProperties(target, src) {
  Object.keys(src)
    .forEach(key => {
      if (!target.hasOwnProperty(key)) {
        target[key] = src[key]
      }
  })
}

const Button = ({children, ...props}) => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    backgroundColor: hover ? "#9c2430": "#dc3545",
    color: "white",
    border: "none",
    fontSize: "10px",
    padding: "8px 10px",
    borderRadius: "3px",
    textAlign: "center"
  }

  if (props.hasOwnProperty("style")) {
    _addNonExistentProperties(buttonStyle, props["style"])
    delete props["style"]
  }

  return (
      <button 
        style={buttonStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...props}
      >
        {children}
      </button>
  )
}


export default Button;