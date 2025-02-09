// import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import * as React from "react";
import Cards from "../Card/Card";

const Scorepage = () => {
  const formdata = useSelector((state) => state.score);

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-10">
        {formdata.map((item) => {
          return (
            <Cards
              id={`Player_id: ${item.id}`}
              name={`Player_name: ${item.name}`}
              score={`Player_score: ${item.score}`}
            >
            </Cards>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Scorepage;
