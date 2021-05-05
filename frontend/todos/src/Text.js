import React from "react";
import "./Text.css";

const Text = (props) => {
  return <h3 className="text">{props.children}</h3>;
};

export default Text;
