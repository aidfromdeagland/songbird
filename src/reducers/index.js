const initialState = {
  heroes: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROED_LOADED':
      return {
        heroes: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
