import {connect} from 'react-redux';
import * as Actions from '../actions';
import Label from '../components/Label';

const mapStateToProps = (state) => {
  const {
    users
  } = state;

  return {
    name: users.name
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Label);
