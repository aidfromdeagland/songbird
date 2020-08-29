import React, { Suspense } from 'react';
import './app.scss';
import {
  Container, Row, ProgressBar, Spinner,
} from 'react-bootstrap';
import { connect } from 'react-redux';

import Header from './header/header';
import NextButton from './nextButton/nextButton';
import WinModal from './winModal/winModal';

const QuestionBlock = React.lazy(() => import('./questionBlock/questionBlock'));
const VariantsBlock = React.lazy(() => import('./variantsBlock/variantsBlock'));
const DescriptionBlock = React.lazy(() => import('./descriptionBlock/descriptionBlock'));

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
                <Suspense fallback={(
                  <div className="text-center p-2">
                    <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
                )}
                >
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
                </Suspense>
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
