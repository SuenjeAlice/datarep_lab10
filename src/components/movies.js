//Data Representation & Querying - Lab 7 - G00363332 - Sünje Alice Winteler
import React from 'react';

//imported MovieItem
import { MovieItem } from './movieitem';
const { Component } = require("react");

//created a Movies class which inherits from Component, used export keyword to export the class
export class Movies extends Component{
    //used render method
    render(){
        //used props for property and movies to access movies variable in Read class
        //used map function to pull array apart and arrow function 
        return this.props.movies.map( (movie)=>{
            //used MovieItem and created movie variable and passed individual movie object into it
            //Added ReloadData
            return <MovieItem movie = {movie} ReloadData={this.props.ReloadData}></MovieItem>
        })
            
    }
}