import React from "react";

function Profile(props) {
  return (
    <div>
      <div class="image">
        <img src={props.image} alt="habitate" width="600" height="400" />
        <div class="desc">{props.description}</div>
      </div>
    </div>
  );
}
export default Profile;
