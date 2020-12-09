//Data Representation & Querying - Lab 10 - G00363332 - Sünje Alice Winteler
import React from 'react';
const { Component } = require("react");

//created a Extra class which inherits from Component, used export keyword to export the class
export class Extra extends Component{
    //used render method
    render(){
        return(
            <div>
                {/* Added content to component */}
                <h1>Extra Component</h1>
            </div>
        );
    }
}