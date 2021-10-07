const initialState = {
  MaLichChieu: 42149,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MA_LICH_CHIEU":
      state.MaLichChieu = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
