import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../App';
import { fetchRecipe } from '../actions/index';


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipe }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
