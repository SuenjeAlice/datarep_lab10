//Data Representation & Querying - Lab 9 - G00363332 - Sünje Alice Winteler
import React from 'react';

//imported Card from React Bootstrap
import Card from 'react-bootstrap/Card';
//imported Link
import {Link} from 'react-router-dom';
//imported Button
import Button from 'react-bootstrap/Button';
//imported axios
import axios from 'axios';
const { Component } = require("react");


//created a MovieItem class which inherits from Component, used export keyword to export the class
export class MovieItem extends Component {

    //
    constructor(){
        super();

        //bind DeleteMovie
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //created DeleteMovie method to delete movie
    DeleteMovie(e){
        //makes event cancelable
        e.preventDefault();

        console.log("Delete: " + this.props.movie._id)

        //used delete method
        axios.delete("http://localhost:4000/api/movies/" + this.props.movie._id)
        .then(()=> {
            this.props.ReloadData();
        })
        .catch();
    }

    //used render method
    render() {
        return (
            <div>
                {/*Used Card template from React Bootstrap */}
                <Card>
                    {/*used props.movie to access individual movie object, used .Title to access Title of movie object */}
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/* used props.movie to access individual movie object, used .Poster to access Poster of movie object*/}
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {/*used props.movie to access individual movie object, used .Year to access Year of movie object */}
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-dark">Edit</Link>
                    <Button variant = "danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}