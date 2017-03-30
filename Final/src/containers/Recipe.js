import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorite } from '../actions/index';
import {
  Col,
   Image,
   Button,
   Panel
} from 'react-bootstrap';

class Recipe extends Component {

  constructor(...args) {
    super(...args);
    this.state = {
      open: false,
    };
  }

  handleAddFavorite() {
    this.props.addFavorite(this.props.recipe.recipeNew[0].hits[0].recipe);
  }

  renderRecipe() {
    return (
    this.props.recipe.recipeNew.map((item) => {
      return (
        <Col xs={4} key={item.q}>
          <div className="spandiv">
            <Image responsive alt="food" src={item.hits[0].recipe.image} />
              <span
                className="btn spanfavorite"
                onClick={this.handleAddFavorite.bind(this)}>
                <img alt="hearticon" src={require("../images/heart.png")} />
              </span>
          </div>
          <h3> {item.hits[0].recipe.label} </h3>

          <Panel collapsible expanded={this.state.open}>
            <p>{item.hits[2].recipe.ingredientLines.map((food) => {return(<li key={food}>{food}</li>); }) }</p>
          </Panel>
          <Button className="searchbutton btn" onClick={() => this.setState({ open: !this.state.open })}> ingredients </Button>
        </Col>
      );
    })
    );
  }

  render() {
    return (
      <div>
        <div> {this.renderRecipe()} </div>
        <div className="spandiv">
          <span
            className="btn spandelete"
            onClick={this.handleAddFavorite}
          >
            <img alt="hearticon" src={require("../images/heart.png")} />
          </span>
        </div>
      </div>

    );
  }
}
Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  addFavorite: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    recipe: state.recipe,
    selectedRecipe: state.selectedRecipe,
    favoriteRecipeList: state.favoriteRecipeList
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFavorite }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
