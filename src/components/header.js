//Data Representation & Querying - Lab 10 - G00363332 - Sünje Alice Winteler
import React from 'react';
const { Component } = require("react");

//created a Header class which inherits from Component, used export keyword to export the class
export class Header extends Component{
    //used render method
    render(){
        return(
            <div>
                <h1>This is the header component.</h1>
            </div>
        );
    }
}

