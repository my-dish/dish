// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import Login from '../components/pages/Login';

import type { State } from '../types/states';

type StateProps = {
  mail: string;
};

type DispatchProps = {
  login: (string) => {};
};

const mapStateToProps = (state: State): StateProps => ({
  mail: state.auth.mail
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchProps => ({
  login: (mail) => dispatch(actions.login(mail))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
