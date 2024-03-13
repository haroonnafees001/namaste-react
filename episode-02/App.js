

//
// <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>

//     <div id="child2">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>
// </div>


//
// const heading = React.createElement("h1",{id:'heading'},"Hello World from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom"


const heading = React.createElement(
    "div",{id:'parent'},
    [  React.createElement(
        "div",
        {id:'child'},
        [React.createElement("h1",{},"Parcel added")],
        [React.createElement("h2",{},"This is H2 tag")],
    )],[  React.createElement(
        "div",
        {id:'child2'},
        [React.createElement("h1",{},"This is H1 tag")],
        [React.createElement("h2",{},"This is H2 tag")],
    )],
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);