const initialState = {
  theme: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme ? false : true };
    default:
      return state;
  }
};

export default reducer;
