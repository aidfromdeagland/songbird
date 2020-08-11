import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { goNextRound } from '../../actions';

function NextButton(props) {
  const {
    dispatch, roundPool, round, isCorrectAnswer,
  } = props;
  const isValidButton = isCorrectAnswer && round < roundPool.length - 1;
  return (
    <Button
      className={isValidButton ? 'mt-1 btn-success' : 'mt-1'}
      block
      disabled={!isValidButton}
      onClick={() => {
        if (round < roundPool.length - 1) {
          dispatch(goNextRound());
        }
      }}
    >
      Next
    </Button>
  );
}

const mapStateToProps = (state) => {
  const { isCorrectAnswer, roundPool, round } = state;
  return ({ isCorrectAnswer, roundPool, round });
};

export default connect(mapStateToProps)(NextButton);
