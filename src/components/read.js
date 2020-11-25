//Data Representation & Querying - Lab 9 - G00363332 - Sünje Alice Winteler
import React from 'react';

//imported Axios
import axios from 'axios';

//imported Movies class
import { Movies } from './movies';
const { Component } = require("react");

//created a Read class which inherits from Component, used export keyword to export the class
export class Read extends Component{

    //
    constructor(){
        super();
        
        //bind ReloadData
        this.ReloadData = this.ReloadData.bind(this);
    }

    //used object 'state' to store data associated with this component
    state = {
        //created movies array and added JSON data to array
        //movies is an array of objects
        movies: []
    };

    //lifecycle hook, gets called every time the component is in view
    componentDidMount(){
        //use get method to get data at url (from server)
        axios.get('http://localhost:4000/api/movies')
        //callback functions, then gets executed if the promise is fulfilled, catch if there is an error
        .then((response)=>{
                //updates movies array
                this.setState({
                    movies: response.data
                })
        })
        .catch((error)=>{ 
            console.log(error)
        });
    }

    //created ReloadData method to reload data
    ReloadData(){
        //used get method
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
                this.setState({
                    movies: response.data
                })
        })
        .catch((error)=>{ 
            console.log(error)
        });
    }

    //used render method
    render(){
        return(
            <div>
                <h1>This is the read component.</h1>
                {/*used Movies and create variable movies and passed informatiion from movies array to it */}
                {/*Added ReloadData */}
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}
