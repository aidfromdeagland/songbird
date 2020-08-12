const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'HEROES_LOADED':
      return {
        ...state,
        isInitLaunch: action.payload.isInitLaunch,
        activeAttr: action.payload.activeAttr,
        selectedPool: action.payload.selectedPool,
        roundPool: action.payload.roundPool,
        variantsPool: action.payload.variantsPool,
        heroSelected: action.payload.heroSelected,
        incorrectVariants: [],
        isCorrectAnswer: false,
        score: 0,
        round: 0,
      };
    case 'HERO_SELECTED':
      return {
        ...state,
        heroSelected: action.payload,
      };
    case 'ANSWERED_CORRECT': {
      return {
        ...state,
        isCorrectAnswer: true,
        score: state.score + action.payload,
      };
    }
    case 'ADD_INCORRECT_VARIANT':
      return {
        ...state,
        incorrectVariants: [...state.incorrectVariants, action.payload],
      };
    case 'GO_NEXT_ROUND':
      return {
        ...state,
        round: action.payload.round,
        variantsPool: action.payload.variantsPool,
        heroSelected: action.payload.heroSelected,
        incorrectVariants: [],
        isCorrectAnswer: false,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
