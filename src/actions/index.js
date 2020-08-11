import HeroesService from '../services/heroesService';
import { heroTemplate } from '../dota2data/heroes';
import { shuffleArray, getSlicedArray } from '../utils/arrayhelpers';

const heroesService = new HeroesService();
const initialRound = 0;

const heroesLoaded = (attr) => {
  const selectedPool = attr
    ? heroesService.getHeroesByAttr(attr)
    : heroesService.getHeroes();
  const roundPool = getSlicedArray(shuffleArray(selectedPool), 10);
  const otherHeroes = getSlicedArray(shuffleArray(selectedPool.filter((hero) => hero !== roundPool[initialRound])), 5);
  const variantsPool = shuffleArray([roundPool[initialRound], ...otherHeroes]);

  return ({
    type: 'HEROES_LOADED',
    payload: {
      activeAttr: attr,
      selectedPool,
      roundPool,
      variantsPool,
      round: initialRound,
      score: 0,
    },
  });
};

const goNextRound = () => ({
  type: 'GO_NEXT_ROUND',
});

const addClickedVariant = (id) => ({
  type: 'ADD_CLICKED_VARIANT',
  payload: id,
});

const answeredCorrect = () => ({
  type: 'ANSWERED_CORRECT',
});

const heroSelected = (heroObj) => ({
  type: 'HERO_SELECTED',
  payload: heroObj || heroTemplate,
});

export {
  heroesLoaded, heroSelected, addClickedVariant, answeredCorrect, goNextRound,
};
