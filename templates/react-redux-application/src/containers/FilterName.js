// @flow

import { connect } from 'react-redux';
import * as actions from '../actions';
import Input from '../components/Input';

type State = {};

type Dispatch = {
  updateName: (string) => void;
};

/**
 * @param {Allstates} state
 */
const mapStateToProps: {} = (): State => {
  return {};
};

/**
 * @param {Function} dispatch
 * @param {Object} props
 */
const mapDispatchToProps = (dispatch): Dispatch => {
  return {
    updateName: (name: string) => {
      dispatch(actions.updateName(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
