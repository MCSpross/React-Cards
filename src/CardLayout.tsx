import * as React from "react";

import CardInfo from './CardInfo'

export default class CardLayout extends React.Component<CardInfo, {}> {

constructor (props: CardInfo){
super(props);
}
  render() {
    return (
            <div className="card-front-bg" >
                <b> {this.props.abbreviation}</b>
                <i> {this.props.suite} </i>
            </div>
                );
  }
}
