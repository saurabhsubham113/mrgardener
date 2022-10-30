import React from "react";
import { NavLink } from "react-router-dom";

const List = () => {
  return (
    <ul className="border-2 w-72 border-darkGreen">
      <li className="border-b-2 p-4 border-darkGreen">
        <NavLink to="/product/indoorAndOutdoor">
          Indoor And Outdoor Plants
        </NavLink>
      </li>
      <li className="border-b-2 p-4 border-darkGreen">
        <NavLink to="/product/floweringPlant"> Flowering Plants</NavLink>
      </li>
      <li className="border-b-2 p-4 border-darkGreen">
        <NavLink to="/product/cactiAndSucculents">
          Cactus And Succelents Plants
        </NavLink>
      </li>
      <li className=" p-4">
        <NavLink to="/product/hangingPlant">Hanging Plants</NavLink>
      </li>
    </ul>
  );
};

export default List;
