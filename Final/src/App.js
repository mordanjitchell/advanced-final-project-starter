import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './containers/Recipe';
import RecipeList from './containers/RecipeList';
import SearchBar from './containers/SearchBar';
import DinerList from './containers/DinerList';
import NewFavoriteList from './containers/NewFavoriteList';
import './App.css';
import {
  Image,
  Jumbotron,
  Grid,
  Col,
  Row
} from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  componentWillMount() {
    this.props.fetchRecipe('chicken');
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Grid>
            <Row>
              <Col xs={12}>
                <Jumbotron className="header">
                  <Image responsive className=""src={require('./images/foodlogo.png')} />
                </Jumbotron>
                <SearchBar />
                <Recipe />
                <RecipeList />
                <DinerList />
                <NewFavoriteList />
              </Col>
            </Row>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
