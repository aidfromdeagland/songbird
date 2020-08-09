import HeroesService from '../services/heroesService';
import { getSlicedArray, shuffleArray } from '../utils/arrayhelpers';

const heroesService = new HeroesService();
const selectedPool = heroesService.getHeroes();
const roundPool = getSlicedArray(shuffleArray(selectedPool), 10);
const round = 0;
const otherHeroes = getSlicedArray(shuffleArray(selectedPool.filter((hero) => hero !== roundPool[round])), 5);
const variantsPool = shuffleArray([roundPool[round], ...otherHeroes]);
const initialState = ({
  selectedPool,
  roundPool,
  variantsPool,
  round,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_LOAD':
      return {
        ...state,
        selectedPool: action.payload.selectedPool,
        roundPool: action.payload.roundPool,
        variantsPool: action.payload.variantsPool,
        round: action.payload.round,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
