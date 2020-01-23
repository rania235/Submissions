import React from "react";

function New1(props) {
  return (
    <div>
      <h1> {props.title}</h1>

      <p class="txt"> {props.description}</p>
      <div class="img1">
        <img src={props.image} alt="build house" width="550px" height="350px" />
      </div>
    </div>
  );
}
export default New1;
