import React from 'react';
import './app.scss';
import { Container, Row, ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux';

import Header from './header/header';
import QuestionBlock from './questionBlock/questionBlock';
import VariantsBlock from './variantsBlock/variantsBlock';
import DescriptionBlock from './descriptionBlock/descriptionBlock';
import NextButton from './nextButton/nextButton';
import WinModal from './winModal/winModal';

function App(props) {
  const {
    roundPool, round, isCorrectAnswer, isInitLaunch,
  } = props;

  return (
    <div className="app">
      <Container className="bg-dark">
        <Header />
        {
          isInitLaunch
            ? null
            : (
              <>
                <ProgressBar
                  now={((isCorrectAnswer ? round + 1 : round) / roundPool.length) * 100}
                  striped
                  animated
                />
                <QuestionBlock />
                <Row>
                  <VariantsBlock />
                  <DescriptionBlock />
                </Row>
                <NextButton />
              </>
            )
}
      </Container>
      <WinModal />
    </div>
  );
}

const mapStateToProps = (state) => {
  const {
    roundPool, round, isCorrectAnswer, isInitLaunch,
  } = state;
  return ({
    roundPool, round, isCorrectAnswer, isInitLaunch,
  });
};

export default connect(mapStateToProps)(App);
