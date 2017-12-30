import { connect } from 'react-redux';
// import * as actions from '';
// import Component from '';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(actions.updateName(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(/* component's name */);
