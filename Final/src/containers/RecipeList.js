import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorite, getDinerList } from '../actions/index';
import {
  Grid,
  Button,
  Panel,
  Col,
  Image} from 'react-bootstrap';

class RecipeList extends Component {

  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  renderRecipeList() {
    return (
    this.props.recipe.recipeNew.map((item) => {
      return (
        <div key={item.count}>
          <Col xs={4} >
            <div className="spandiv">
              <Image responsive alt="food" src={item.hits[1].recipe.image} />
              <span
                className="btn spanfavorite"
                onClick={() => this.props.addFavorite(item.hits[1].recipe)}
              >
              <img alt="hearticon" src={require("../images/heart.png")} />
              </span>
            </div>
            <h3> {item.hits[1].recipe.label} </h3>
            <Panel collapsible expanded={this.state.open}>
              <p>{item.hits[1].recipe.ingredientLines.map((food) => {return(<li key={food} >{food}</li>)})}</p>
            </Panel>
            <Button className="searchbutton btn" onClick={() => this.setState({ open: !this.state.open })}> ingredients </Button>
          </Col>

          <Col xs={4}>
            <div className="spandiv">
              <Image responsive alt="food" src={item.hits[2].recipe.image} />
              <span
              className="btn spanfavorite"
                onClick={() => this.props.addFavorite(item.hits[2].recipe)}
              >
              <img alt="hearticon" src={require("../images/heart.png")} />
              </span>
            </div>
            <h3> {item.hits[2].recipe.label} </h3>
            <Panel collapsible expanded={this.state.open}>
              <p>{item.hits[2].recipe.ingredientLines.map((food) => {return(<li key={food}>{food}</li>)})}</p>
            </Panel>
            <Button className="searchbutton btn" onClick={() => this.setState({ open: !this.state.open })}> ingredients </Button>
          </Col>
        </div>
      );
    })
    );
  }
  render() {
    return (
      <Grid>
        <div>{this.renderRecipeList()}</div>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipe: state.recipe,
    favoriteRecipeList: state.favoriteRecipeList,
    getDinerList: state.getDinerList.recipeNew
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFavorite, getDinerList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
