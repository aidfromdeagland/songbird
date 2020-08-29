/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import reducer from './reducers/rootReducer';
import { heroTemplate } from '../dota2data/heroes';

const initialState = ({
  isInitLaunch: true,
  activeAttr: '',
  selectedPool: [heroTemplate],
  roundPool: [heroTemplate],
  variantsPool: [],
  incorrectVariants: [],
  heroSelected: heroTemplate,
  isCorrectAnswer: false,
  round: 0,
  score: 0,
});

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
