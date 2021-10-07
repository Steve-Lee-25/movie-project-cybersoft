const initialState = {
  maPhim: 5930,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DETAIL_DATA_PAGE":
      state.maPhim = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
