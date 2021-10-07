import { combineReducers, createStore } from "redux";
import movieHome from "./reducers/movieHome";
import movieReviews from "./reducers/movieReviews";
import brandList from "./reducers/brandList.js";
import movieListDetail from "./reducers/movieListDetail";
import infoMovie from "./reducers/infoMovie";
import detailPage from "./reducers/detailPage";
import cinemaCode from "./reducers/cinemaCode";
import infoSeat from "./reducers/infoSeat";

const rootReducer = combineReducers({
  movieHome,
  movieReviews,
  brandList,
  movieListDetail,
  infoMovie,
  detailPage,
  cinemaCode,
  infoSeat,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
