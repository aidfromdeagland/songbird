const heroesLoaded = (newHeroes) => ({
  type: 'HEROES_LOADED',
  payload: newHeroes,
});

export {
  heroesLoaded,
};
