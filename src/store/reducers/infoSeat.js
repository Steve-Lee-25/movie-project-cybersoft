const initialState = {
  seats: {
    daDat: false,
    giaVe: 80000,
    loaiGhe: "Thuong",
    maGhe: 55241,
    maRap: 500,
    stt: "01",
    taiKhoanNguoiDat: null,
    tenGhe: "01",
  },

  bookingSeat: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INFO_SEATS":
      state.seats = action.payload;

      const temp = {
        maGhe: action.payload.maGhe,
        giaVe: action.payload.giaVe,
      };

      state.bookingSeat.push(temp);

      return { ...state };
    default:
      return state;
  }
};

export default reducer;
