import React from 'react';

const {
  Provider: HeroesServiceProvider,
  Consumer: HeroesServiceConsumer,
} = React.createContext();

export {
  HeroesServiceProvider,
  HeroesServiceConsumer,
};
