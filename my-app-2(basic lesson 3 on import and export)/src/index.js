import React from 'react';
import ReactDOM from 'react-dom';
import * as x from "./calculator";

ReactDOM.render(
<div>
   <ul>
     <li>{x.add(6,3)}</li>
     <li>{x.substract(6,3)}</li>
     <li>{x.multiply(6,3)}</li>
     <li>{x.divide(6,3)}</li>
   </ul>
</div>, document.getElementById("root"))
