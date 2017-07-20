// @flow

import { connect } from 'react-redux';
import Label from '../components/Label';

import type { AllStates } from '../types';

type State = {
  name: string;
};

type Dispatch = {};

/**
 * @param {Allstates} state
 * @return {Object} name
 */
const mapStateToProps = (state: AllStates): State => ({
  name: state.users.name
});

/**
 * @param {Function} dispatch
 * @param {Object} props
 * @return {Object}
 */
const mapDispatchToProps = (): Dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Label);
