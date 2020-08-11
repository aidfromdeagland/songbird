import HeroesService from '../services/heroesService';
import { heroTemplate } from '../dota2data/heroes';
import { getSlicedArray, shuffleArray } from '../utils/arrayhelpers';

const heroesService = new HeroesService();
const initianActiveAttr = '';
const initialCorrectAnswerCost = 5;
const incorrectAnswerPenalty = 1;
const selectedPool = heroesService.getHeroes(initianActiveAttr);
const roundPool = getSlicedArray(shuffleArray(selectedPool), 10);
const round = 0;
const variantsPool = heroesService.getVariantsHeroes(selectedPool, roundPool[round]);
const initialState = ({
  activeAttr: initianActiveAttr,
  selectedPool,
  roundPool,
  variantsPool,
  round,
  heroSelected: heroTemplate,
  isCorrectAnswer: false,
  selectedVariants: [],
  score: 0,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_LOADED':
      return {
        ...state,
        activeAttr: action.payload.activeAttr,
        selectedPool: action.payload.selectedPool,
        roundPool: action.payload.roundPool,
        variantsPool: action.payload.variantsPool,
        selectedVariants: [],
        isCorrectAnswer: false,
        heroSelected: heroTemplate,
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
        score: state.score + initialCorrectAnswerCost - incorrectAnswerPenalty * state.selectedVariants.length,
      };
    }
    case 'ADD_CLICKED_VARIANT':
      return {
        ...state,
        selectedVariants: [...state.selectedVariants, action.payload],
      };
    case 'GO_NEXT_ROUND':
      return {
        ...state,
        round: state.round + 1,
        variantsPool: heroesService.getVariantsHeroes(state.selectedPool, state.roundPool[state.round + 1]),
        selectedVariants: [],
        isCorrectAnswer: false,
        heroSelected: heroTemplate,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
