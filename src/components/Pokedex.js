import React from "react";
import Pokemon from "./Pokemon";

export default function Pokedex(props) {
  return (
    <div>
      Pokedex.js
      <Pokemon saveName={props.saveName} releasePkmn={props.releasePkmn} />
    </div>
  );
}
