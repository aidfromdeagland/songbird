import HeroesService from '../services/heroesService';
import { shuffleArray, getSlicedArray } from '../utils/arrayhelpers';

const heroesService = new HeroesService();

const heroesLoadAll = () => {
  const newPool = shuffleArray(heroesService.getHeroes());
  return ({
    type: 'HEROES_LOAD_ALL',
    payload: {
      heroesPool: newPool,
      heroesRound: getSlicedArray(shuffleArray(newPool), 10),
    },
  });
};

const heroesLoadByAttr = (attr) => {
  const newPool = shuffleArray(heroesService.getHeroesByAttr(attr));
  return ({
    type: 'HEROES_LOAD_BY_ATTR',
    payload: {
      heroesPool: newPool,
      heroesRound: getSlicedArray(shuffleArray(newPool), 10),
    },
  });
};

export {
  heroesLoadAll,
  heroesLoadByAttr,
};
