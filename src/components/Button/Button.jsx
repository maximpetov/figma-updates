/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon } from "../Icon";
import "./style.css";

export const Button = ({ showIcon = true, type }) => {
  return (
    <div className={`button ${type}`}>
      {showIcon && <Icon className="icon-instance" ellipseClassName={`${type === "dangerous" && "class"}`} />}

      <div className="hello">Hello</div>
    </div>
  );
};

Button.propTypes = {
  showIcon: PropTypes.bool,
  type: PropTypes.oneOf(["dangerous", "default"]),
};
