import React, { useState } from "react";

function Toggle() {
  const [button, setButton] = useState(false)

  function setter() {
    setButton((button) => !button)
  }
  //   if (button === true) {
  //     setButton(false)
  //   } else {
  //     setButton(true)
  //   }
  // }

  const color = button ? "red" : "white";


  return <button 
  style={{ background: color }}
  onClick={setter}>
  {button ? "ON" : "OFF"}
  </button>;
}

export default Toggle;
