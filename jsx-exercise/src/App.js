import React from "react";
import HelloName from "./HelloName";


export class App extends React.Component{
    render(){
        return(
            <div>
            <HelloName name="Eddie"/>
            </div>
        ) 
    }
}