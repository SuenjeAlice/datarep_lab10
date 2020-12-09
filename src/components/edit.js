//Data Representation & Querying - Lab 10 - G00363332 - Sünje Alice Winteler
import React from 'react';

//imported axios
import axios from 'axios';
const { Component } = require("react");

//created a Edit class which inherits from Component, used export keyword to export the class
export class Edit extends Component{

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

    //lifecycle hook
    componentDidMount(){
        console.log(this.props.match.params.id);

        //used get method
        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster
            })
        })
        .catch((error)=>{
            console.log(error);
        })
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

        //created variable and add key value pairs
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id: this.state._id
        }

        //used put method
        axios.put('http://localhost:4000/api/movies/' + this.state._id, newMovie)
        .then(res => {
            console.log(res.data)
        })
        .catch();

        //used post method to send newMovie to server
    //     axios.post('http://localhost:4000/api/movies', newMovie)
    //     .then((res)=>{
    //         //console log responds
    //         console.log(res);
    //     })
    //     .catch((err)=>{
    //         //console log error
    //         console.log(err);
    //     });
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
                        <input type='submit' value='Edit Movie' className='btn btn-dark'></input>
                    </div>
                </form>
            </div>
        );
    }
}