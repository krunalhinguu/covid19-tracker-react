import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Infobox.css";
import { preetyPrintStat } from "../helpers/util";

function Infoxbox({ title, cases, isRed, active, total, ...props }) {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
      onClick={props.onClick}
    >
      <CardContent>
        {/* title */}
        <Typography className="infoBox__cases" color="textSecondary">
          {title}
        </Typography>

        {/* number of cases */}
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {preetyPrintStat(cases)}
        </h2>

        {/* total cases */}
        <Typography className="infoBox__total" color="textSecondary">
          {preetyPrintStat(total)} total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Infoxbox;
