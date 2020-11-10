//Data Representation & Querying - Lab 6 - G00363332 - Sünje Alice Winteler
import React from 'react';

//
import axios from 'axios';
const { Component } = require("react");

//created a Create class which inherits from Component, used export keyword to export the class
export class Create extends Component{

    //added a constructor
    constructor(){
        //invoke super keyword
        super();

        //binding 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        //state set to blank
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    //onChangeTitle with argument e
    onChangeTitle(e){
        //update state
        this.setState({
            Title: e.target.value
        })
    }

    //onChangeYear with argument e
    onChangeYear(e){
        //update state
        this.setState({
            Year: e.target.value
        })
    }

    //onChangePoster with argument e
    onChangePoster(e){
        //update state
        this.setState({
            Poster: e.target.value
        })
    }

    //onSubmit with argument e
    onSubmit(e){
        //prevents from calling button multiple times
        e.preventDefault();
        //alert to test code
        alert("Movie: " + this.state.Title);

        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }

        axios.post('http://localhost:4000/api/movies', newMovie)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    //used render method
    render(){
        return(
            <div className='App'>
                {/*Form button called onSubmit which calls onSubmit method*/}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        {/*input uses onChange to call onChangeTitle method, the value is set to this.state.Titel*/}
                        <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        {/*input uses onChange to call onChangeYear method, the value is set to this.state.Year*/}
                        <input type='text' className='form-control' value={this.state.Year} onChange={this.onChangeYear}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        {/*input uses onChange to call onChangePoster method, the value is set to this.state.Poster*/}
                        <textarea type='text' className='form-control' value={this.state.Poster} onChange={this.onChangePoster}>

                        </textarea>
                    </div>
                    <div className='form-group'>
                        {/*Submit Button*/}
                        <input type='submit' value='Add Movie' className='btn btn-dark'></input>
                    </div>
                </form>
            </div>
        );
    }
}
