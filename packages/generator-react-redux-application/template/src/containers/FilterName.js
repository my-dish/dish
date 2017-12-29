// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Input from '../components/Input';

type State = {};

type Dispatch = {
  updateName: (string) => void;
};

/**
 * @param {Allstates} state
 * @return {Object}
 */
const mapStateToProps = (): State => ({});

/**
 * @param {Function} dispatch
 * @param {Object} props
 * @return {Object}
 * @return {string} updateName
 */
const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): Dispatch => ({
  updateName: (name: string) => {
    dispatch(actions.updateName(name));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
