const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE":
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
