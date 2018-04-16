
import * as React from "react";
import * as ReactDOM from "react-dom";

import CardLayout from "./src/CardLayout";
import {Deck} from "./src/Deck"

let deck = Deck.Create();
let cardsList = Deck.Shuffle(deck, 10).map(function(card, index){
    return <CardLayout {...card} />
  });

ReactDOM.render(
<div>
{/* <CardLayout name="King" abbreviation="K" suite="Spade" value={10} /> */}
<div> {cardsList} </div>
</div>,
  document.getElementById("root")
);
