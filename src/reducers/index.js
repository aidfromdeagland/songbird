import HeroesService from '../services/heroesService';
import { getSlicedArray, shuffleArray } from '../utils/arrayhelpers';

const heroesService = new HeroesService();
const initialState = ({ heroes: getSlicedArray(shuffleArray(heroesService.getHeroes()), 6) });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_LOADED_ALL':
      return {
        ...state, heroes: action.payload,
      };
    case 'HEROES_LOADED_BY_ATTR':
      return {
        ...state, heroes: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
