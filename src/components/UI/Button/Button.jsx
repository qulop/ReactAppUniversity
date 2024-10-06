import React from "react";


function _addNonExistentProperties(target, src) {
  Object.keys(src)
    .forEach(key => {
      if (!target.hasOwnProperty(key)) {
        target[key] = src[key]
      }
  })
}

const Button = ({children, ...props}) => {
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
    _addNonExistentProperties(buttonStyle, props["style"])
    delete props["style"]
  }

  return (
      <button {...props} style={buttonStyle}>
        {children}
      </button>
  )
}


export default Button;