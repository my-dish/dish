const initialState = {
  list: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default reducer;
