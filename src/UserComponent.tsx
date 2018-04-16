
import * as React from "react";

import UserInterface from './UserInterface'

export default class UserComponent extends React.Component<UserInterface, {}> {

constructor (props: UserInterface){
super(props);
}
  render() {
    return (
            <div>
                Hello, {this.props.name}. You are {this.props.age} years old.
            </div>


                );
  }
}
