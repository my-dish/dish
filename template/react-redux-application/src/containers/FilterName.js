import {connect} from 'react-redux';
import * as Actions from '../actions';
import Input from '../components/Input';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, props) => (
  {
    updateName: (name) => {
      dispatch(Actions.updateName(name));
    }
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
