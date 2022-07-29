import React from "react";
import "./BotaoAddCard.css"

export default function BotaoAddCard (props){

  return (
    <button>
      {props.children}
    </button>
  );
}
