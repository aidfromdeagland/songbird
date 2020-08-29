import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { goNextRound } from '../../redux/actions/actions';

function NextButton(props) {
  const {
    dispatch, selectedPool, roundPool, round, isCorrectAnswer,
  } = props;
  const isValidButton = isCorrectAnswer && round < roundPool.length - 1;
  return (
    <Button
      className={isValidButton ? 'mt-1 btn-success' : 'mt-1'}
      block
      disabled={!isValidButton}
      onClick={() => {
        if (round < roundPool.length - 1) {
          dispatch(goNextRound(selectedPool, roundPool, round));
        }
      }}
    >
      Next
    </Button>
  );
}

const mapStateToProps = (state) => {
  const {
    isCorrectAnswer, selectedPool, roundPool, round,
  } = state;
  return ({
    isCorrectAnswer, selectedPool, roundPool, round,
  });
};

export default connect(mapStateToProps)(NextButton);
