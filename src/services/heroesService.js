import heroes from '../dota2data/heroes';
import { getSlicedArray, shuffleArray } from '../utils/arrayhelpers';

export default class HeroesService {
  getHeroesByAttr = (attr) => (attr ? heroes.filter((hero) => hero.primary_attr === attr) : heroes);

  getVariantsHeroes = (currentPool, correctHero) => {
    const variantsQuantity = 6;
    const otherHeroes = getSlicedArray(
      shuffleArray(currentPool.filter((hero) => hero.id !== correctHero.id)), variantsQuantity - 1,
    );
    const variantsPool = shuffleArray([correctHero, ...otherHeroes]);
    return variantsPool;
  }
}
