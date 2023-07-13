/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import "./style.css";

export const Card = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      <Button type="default" />
    </div>
  );
};
