import React from "react";
import {Tile} from "../tile/Tile"

export const TileList = ({tiles}) => {
  console.log(tiles)
  return (
    <div>
      {tiles.map((tile, index) =>(
      <Tile key={index} tile={tile}/>
      ))}
    </div>
  );
};
