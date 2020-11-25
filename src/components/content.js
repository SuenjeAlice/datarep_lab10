//Data Representation & Querying - Lab 9 - G00363332 - Sünje Alice Winteler
import React from 'react';
const { Component } = require("react");

//created a Content class which inherits from Component, used export keyword to export the class
export class Content extends Component{
    //used render method
    render(){
        return(
            <div>
                {/* Added content to component */}
                <h1>Hello World!</h1>
                {/* Use Date class and toLocaleTimeString method to get current time */}
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
