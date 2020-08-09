import HeroesService from '../services/heroesService';
import { getSlicedArray, shuffleArray } from '../utils/arrayhelpers';

const heroesService = new HeroesService();
const initialHeroesPool = shuffleArray(heroesService.getHeroes());
const initialState = ({
  heroesPool: initialHeroesPool,
  heroesRound: getSlicedArray(shuffleArray(initialHeroesPool), 10),
  round: 0,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_LOAD_ALL':
      return {
        ...state, heroesPool: action.payload.heroesPool, heroesRound: action.payload.heroesRound, round: 0,
      };
    case 'HEROES_LOAD_BY_ATTR':
      return {
        ...state, heroesPool: action.payload.heroesPool, heroesRound: action.payload.heroesRound, round: 0,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
