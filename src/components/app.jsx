import React from 'react';
import './app.scss';
import Header from './header/header';
import QuestionBlock from './questionBlock/questionBlock';
import VariantsBlock from './variantsBlock/variantsBlock';
import DescriptionBlock from './descriptionBlock/descriptionBlock';

export default function App() {
  return (
    <div className="app">
      <Header />
      <QuestionBlock />
      <VariantsBlock />
      <DescriptionBlock />
    </div>
  );
}
