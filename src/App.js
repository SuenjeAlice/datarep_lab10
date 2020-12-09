//Data Representation & Querying - Lab 10 - G00363332 - Sünje Alice Winteler

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import components
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import { Extra } from './components/extra';

//import Bootstrap and Navigation from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

//import BrowserRouter, Switch and Route to be able to navigate between components
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';
import { Edit } from './components/edit';

//changed from function to class and inherited from Component 
class App extends Component{
  //added render method which is needed for Component
  render(){
    return (
      //Use Router (which is BrowserRouter) to ensure
      <Router>
      <div className="App">

      {/* added a Nabar from react bootstrap */}
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Navbar>

        <br/>
        {/*added Switch to add the Route for switching between components */}
        <Switch>
          {/* used Route to define the paths to the components*/}
          <Route path = '/' component={Content} exact/>
          {/* changed path to Create and Read instead of Header and Footer*/}
          <Route path = '/create' component={Create} />
          <Route path = '/read' component={Read} />
          <Route path = '/edit/:id' component={Edit} />
        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
