import React, {Component} from 'react';
import './app.css';
import {Header} from './components/header/header';
import {QuestionBlock} from './components/questionBlock/questionBlock';
import {VariantsBlock} from './components/variantsBlock/variantsBlock';
import {DescriptionBlock} from './components/descriptionBlock/descriptionBlock';

export class App  extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <QuestionBlock />
        <VariantsBlock />
        <DescriptionBlock />
      </div>
    );
  }
}
