import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={() => alert(`You Clicked On Button ${props.number}`)}
      className="border"
    >
      button {props.number}
    </button>
  );
};

export default Button;
