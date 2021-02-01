import React from "react";

const Item = ({ title, description }) => {
  return (
    <div style={{ margin: "1em 0" }}>
      <strong>{title}: </strong>
      <em>{description}</em>
    </div>
  );
};

export default Item;
