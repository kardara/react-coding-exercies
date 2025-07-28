import React from "react";

const ListRendering = (props) => {
  return (
    <ul className="flex flex-col gap-1">
      {props.element.map((el, i) => (
        <li key={i}>{el[0].toUpperCase() + el.slice(1)}</li>
      ))}
    </ul>
  );
};

export default ListRendering;
