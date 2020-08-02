import React from "react";
import "../App.css";

const Title = (props) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center">
        <h1 className=" text-capitalize font-weight-bold">
          {props.name} <strong className="text-yellow">{props.title}</strong>
        </h1>
      </div>
    </div>
  );
};
export default Title;
