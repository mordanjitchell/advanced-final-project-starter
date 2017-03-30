import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Grid,
  Col,
  Row,
  Image,
  Jumbotron,
} from 'react-bootstrap';
import { addFavorite, getFavorite, deleteFavorite } from '../actions/index';


class NewFavoriteList extends Component {

  componentWillMount() {
    this.props.getFavorite();
  }

  handleDeleteFavorite(item, id) {
    this.props.deleteFavorite(item, id);
  }

  handleAddedList() {
    return this.props.favoriteRecipeList.map((item, index) => {
      const number = Number(item.calories);
      const newnumber = Math.round(number);
      return (
        <Col xs={4} key={index} className="recipeItem">
          <li> <h4>{item.label}</h4> </li>
          <li>
            <div className="spandiv">
              <Image alt="image" responsive src={item.image} />
                <span
                  className="btn spandelete"
                  onClick={() =>this.handleDeleteFavorite(item, item._id)}>
                  <img alt="trashicon"src={require('../images/trashcanicon.png')}/>
                </span>
            </div>
          </li>
          <li> source: {item.source} </li>
          <li> calories: {newnumber} </li>
          <a target='_blank' href={item.url} className="btn btn-info cook">cook </a>
          <a target='_blank' href={item.url} className="btnbtn-info">cook </a>
        </Col>
        );
    });
  }

  render() {

    if (!this.props.favoriteRecipeList) {
      return <div>Loading..</div>;
    }

    return (
      <Grid>
        <Row>
          <div>
            <Jumbotron className="favorite">
              <Image responsive className=""src={require('../images/fav.png')} />
            </Jumbotron>
            <Row>
              <ul>{this.handleAddedList()}</ul>
            </Row>
          </div>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoriteRecipeList: state.favoriteRecipeList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFavorite, getFavorite, deleteFavorite }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFavoriteList);
