import React from "react"
import {render} from "react-dom";


function Popup(){
    return (
        <div>
        <h1>Hello, worldsss</h1>
        <p>This is a simple popup</p>
        </div>
    )
}

render(<Popup/>, document.getElementById("react-target"));