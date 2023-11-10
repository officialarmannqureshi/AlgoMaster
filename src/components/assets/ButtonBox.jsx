import React from "react";
import "../../css/menubar.scss";
const ButtonBox = (props) => {
  return (
    <>
      
      <div className="button-box ">
      {props.children}
      </div>
    </>
  );
};

export default ButtonBox;
