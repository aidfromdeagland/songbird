import HeroesService from '../../services/heroesService';
import { heroTemplate } from '../../dota2data/heroes';
import { shuffleArray, getSlicedArray } from '../../utils/arrayhelpers';

const heroesService = new HeroesService();
const initialRound = 0;
const roundsPerGame = 10;
const initialCorrectAnswerCost = 5;
const incorrectAnswerPenalty = 1;

const heroesLoaded = (attr) => {
  const selectedPool = heroesService.getHeroesByAttr(attr);
  const roundPool = getSlicedArray(shuffleArray(selectedPool), roundsPerGame);
  const variantsPool = heroesService.getVariantsHeroes(selectedPool, roundPool[initialRound]);

  return ({
    type: 'HEROES_LOADED',
    payload: {
      isInitLaunch: false,
      activeAttr: attr,
      selectedPool,
      roundPool,
      variantsPool,
      heroSelected: heroTemplate,
    },
  });
};

const goNextRound = (selectedPool, roundPool, currentRound) => ({
  type: 'GO_NEXT_ROUND',
  payload: {
    round: currentRound + 1,
    variantsPool: heroesService.getVariantsHeroes(selectedPool, roundPool[currentRound + 1]),
    heroSelected: heroTemplate,
  },
});

const addIncorrectVariant = (id) => ({
  type: 'ADD_INCORRECT_VARIANT',
  payload: id,
});

const answeredCorrect = (incorrectAnswersQuantity) => ({
  type: 'ANSWERED_CORRECT',
  payload: initialCorrectAnswerCost - incorrectAnswersQuantity * incorrectAnswerPenalty,
});

const heroSelected = (heroObj) => ({
  type: 'HERO_SELECTED',
  payload: heroObj || heroTemplate,
});

export {
  heroesLoaded, heroSelected, addIncorrectVariant, answeredCorrect, goNextRound,
};
