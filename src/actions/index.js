import HeroesService from '../services/heroesService';
import { shuffleArray, getSlicedArray } from '../utils/arrayhelpers';

const heroesService = new HeroesService();

const heroesLoadedAll = () => ({
  type: 'HEROES_LOADED_ALL',
  payload: getSlicedArray(shuffleArray(heroesService.getHeroes()), 6),
});

const heroesLoadedByAttr = (attr) => ({
  type: 'HEROES_LOADED_BY_ATTR',
  payload: getSlicedArray(shuffleArray(heroesService.getHeroesByAttr(attr)), 6),
});

export {
  heroesLoadedAll,
  heroesLoadedByAttr,
};
