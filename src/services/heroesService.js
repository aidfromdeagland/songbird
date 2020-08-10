import heroes from '../dota2data/heroes';
import { getSlicedArray, shuffleArray } from '../utils/arrayhelpers';

export default class HeroesService {
  getHeroes = () => heroes;

  getHeroesByAttr = (attr) => this.getHeroes().filter((hero) => hero.primary_attr === attr);

  getVariantsHeroes = (currentPool, correctHero) => {
    const otherHeroes = getSlicedArray(shuffleArray(currentPool.filter((hero) => hero.id !== correctHero.id)), 5);
    const variantsPool = shuffleArray([correctHero, ...otherHeroes]);
    return variantsPool;
  }
}
