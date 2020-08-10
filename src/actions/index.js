import HeroesService from '../services/heroesService';
import { heroTemplate } from '../dota2data/heroes';
import { shuffleArray, getSlicedArray } from '../utils/arrayhelpers';

const heroesService = new HeroesService();

const heroesLoad = (attr) => {
  const selectedPool = attr
    ? heroesService.getHeroesByAttr(attr)
    : heroesService.getHeroes();
  const roundPool = getSlicedArray(shuffleArray(selectedPool), 10);
  const round = 0;
  const otherHeroes = getSlicedArray(shuffleArray(selectedPool.filter((hero) => hero !== roundPool[round])), 5);
  const variantsPool = shuffleArray([roundPool[round], ...otherHeroes]);
  const heroSelected = heroTemplate;
  console.log(variantsPool);
  return ({
    type: 'HEROES_LOAD',
    payload: {
      selectedPool,
      roundPool,
      variantsPool,
      round,
      heroSelected,
    },
  });
};

const heroSelected = (heroObj) => ({
  type: 'HERO_SELECTED',
  payload: heroObj,
});

export { heroesLoad, heroSelected };
