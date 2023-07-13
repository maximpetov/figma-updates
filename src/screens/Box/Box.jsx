import React from "react";
import { Card } from "../../components/Card";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="card-wrapper">
        <Card className="card-instance" />
      </div>
    </div>
  );
};
