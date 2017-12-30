import { combineReducers } from 'redux';
import <%= reducername %> from './<%= reducername %>';

const reducer = combineReducers({
  <%= reducername %>
});

export default reducer;
