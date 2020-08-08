import heroes from '../dota2data/heroes';

export default class HeroesService {
  getHeroes = () => heroes;

  getHeroesByAttr = (attr) => this.getHeroes().filter((hero) => hero.primary_attr === attr);
}
