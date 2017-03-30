import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipe, fetchDiner } from '../actions/index';
import {
  FormControl
} from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchRecipe(this.state.term);
    const diner = ' diner';
    const newterm = `${this.state.term}${diner}`;
    this.props.fetchDiner(newterm);
    this.setState({ term: '' });
  }

  handleSearch(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group searchBar"
      >
          <FormControl
            className="searchtext form-control"
            type="text"
            placeholder="Search By Ingredients"
            value={this.state.term}
            onChange={this.handleSearch}
          />
            <span className="input-group-btn searchbutton">
            <button
              type="submit"
              className="btn mainsearchbutton"
            >
              Submit
            </button>
          </span>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipe: state.recipe,
    getDinerList: state.getDinerList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipe, fetchDiner }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
