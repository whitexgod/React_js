import React from 'react';
import ReactDOM from 'react-dom';


const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color : ""
}

if (currentTime < 12 ){
  greeting = "Good Morning";
  customStyle.color = "red";
}
else if(currentTime <18){
  greeting = "Good Afternoom";
  customStyle.color = "green";
}
else {
  greeting = "Good night";
  customStyle.color = "blue";
}

ReactDOM.render(
<div>
  <h1 style={customStyle}>{greeting}</h1>
  
</div>, document.getElementById("root"))
