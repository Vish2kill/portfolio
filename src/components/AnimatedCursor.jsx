import React, { useContext, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import { ModeContext } from "../context/Mode";

const Cursor = () => {
  
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={40}
      innerScale={1.5}
      outerScale={1.5}
      outerStyle={{
        border: "1px solid #646981",
        backgroundColor: "transparent",
        zIndex: 9999,
      }}
      innerStyle={{
        backgroundColor: "#508dff",
        zIndex: 9999,
      }}
      trailingSpeed={8}
    />
  );
};

export default Cursor;
