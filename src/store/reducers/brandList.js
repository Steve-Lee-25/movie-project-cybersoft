const initialState = {
  maHeThongRap: "BHDStar",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BRANDS":
      state.maHeThongRap = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
