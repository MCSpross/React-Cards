import * as React from "react";

import CardInfo from './CardInfo'

export default class CardLayout extends React.Component<CardInfo, {}> {

constructor (props: CardInfo){
super(props);
}
  render() {
    return (
      <div className="card">
        <div className="card-front-bg" >
          <Badges abbreviation={this.props.abbreviation} suite={this.props.suite} />
        </div>
      </div>
                );
  }
}

function Badges(props){
  let suiteSVGPath = GetSuiteSVGPath(props.suite);
  return (
    <div>
      <div className="badge-top">
        <b> {props.abbreviation}</b>
        <img src={suiteSVGPath} alt={props.suite} />
      </div>
      <div className="badge-bottom">
        <b> {props.abbreviation}</b>
        <img src={suiteSVGPath} alt={props.suite} />
      </div>
    </div>
  );
}

function GetSuiteSVGPath(suite: string){
  switch(suite.toLowerCase()){
    case "spade":
      return "./assets/SVG/Spade.svg";
    case "club":
      return "./assets/SVG/Club.svg";
    case "heart":
      return "./assets/SVG/Heart.svg";
    case "diamond":
      return "./assets/SVG/Diamond.svg";
    default:
      return "";
  }
}
