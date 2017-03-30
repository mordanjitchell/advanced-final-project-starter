import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Grid,
  Row,
  Col,
   Button,
   Panel,
   Image,
} from 'react-bootstrap';
import { addFavorite } from '../actions/index';

class DinerList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false,
    };
  }

  handleRenderDiner() {
    return (
      this.props.getDinerList[0].hits.map((item, index) => {
        return (
          <Col xs={4} key={index}>
            <div className="spandiv">
              <Image responsive alt="food" src={item.recipe.image} />
              <span
                className="btn spanfavorite"
                onClick={() => this.props.addFavorite(item.recipe)}
                >
                <img alt="hearticon" src={require('../images/heart.png')} />
              </span>
            </div>
            <h3> {item.recipe.label} </h3>
            <Panel collapsible expanded={this.state.open}>
              <p>{item.recipe.ingredientLines.map((food) => {return(<li key={food} >{food}</li>)})}</p>
              </Panel>
            <Button className="searchbutton btn" onClick={() => this.setState({ open: !this.state.open })}> ingredients </Button>
          </Col>

        );
      })
    );
  }

  render() {
    if (!this.props.getDinerList[0]) {
      return <div> </div>;
    }
    return (
      <Grid>
        <Row>
          <div>
            <div>{this.handleRenderDiner()}</div>
          </div>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    getDinerList: state.getDinerList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFavorite }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DinerList);
