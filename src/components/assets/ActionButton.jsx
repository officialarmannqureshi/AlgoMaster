import React from "react";
import "../../css/menubar.scss";
const ActionButton = (props) => {
  return (
    <>
      <div className={`action-button ${props.className}`} onClick={props.onClick}>{props.name}</div>
    </>
  );
};

export default ActionButton;
