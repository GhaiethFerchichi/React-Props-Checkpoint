import React from "react";
import PropTypes from "prop-types";

const Profile = props => {
  return (
    <div
      style={{
        border: "1px solid #9b3c41",
        padding: "3vh",
        margin: "auto",
        marginTop: "15px",
        maxWidth: "800px",
        display: "flex",
        alignItems: "center"
      }}
    >
      {props.children}

      <p style={{ writingMode: "vertical-lr", color: "#9b3c41" }}>
        {props.profession}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <label style={{ textTransform: "uppercase", fontSize: 30 }}>
          {props.fullName}
        </label>
        <p style={{ opacity: 0.5 }}> {props.bio}</p>
      </div>
    </div>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired
};
export default Profile;
