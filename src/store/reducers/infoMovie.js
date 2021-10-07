const initialState = {
  infoMovieItem: {
    adult: false,
    backdrop_path: "/iTgM25ftE7YtFgZwUZupVp8A61S.jpg",
    genre_ids: [9648, 53, 27],
    id: 631843,
    original_language: "en",
    original_title: "Old",
    overview:
      "A group of families on a tropical holiday discover that the secluded beach where they are staying is somehow causing them to age rapidly – reducing their entire lives into a single day.",
    popularity: 1877.482,
    poster_path: "/vclShucpUmPhdAOmKgf3B3Z4POD.jpg",
    release_date: "2021-07-21",
    title: "Old",
    video: false,
    vote_average: 6.7,
    vote_count: 964,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INFO_MOVIES_HOME":
      state.infoMovieItem = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
