
import * as React from "react";
import * as ReactDOM from "react-dom";

import FirstComponent from "./src/FirstComponent";
import UserComponent from "./src/UserComponent";
import UserInterface from "./src/UserInterface";

let users = [];
users.push({
  name: "FlimFlam",
  age: 22
})
users.push({
  name: "Pete",
  age: 55
})
users.push({
  name: "Jan",
  age: 180
})

let usersList = users.map(function(user, index){
    return <li key={ index }><UserComponent {...user} /></li>
  });

ReactDOM.render(
<div>
<h1>Hello, Welcome to the first page Biznatch</h1>
<FirstComponent/>
<ul> {usersList} </ul>
</div>,
  document.getElementById("root")
);
