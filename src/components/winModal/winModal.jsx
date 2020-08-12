import React from 'react';
import {
  Modal, ModalBody, ModalTitle, ModalFooter, Button,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { heroesLoaded } from '../../redux/actions/actions';
import winAudio from '../../assets/sounds/common/roshan_end.mp3';
import ownageWinAudio from '../../assets/sounds/common/announcer_ownage.mp3';
import './winModal.scss';

function WinModal(props) {
  const {
    dispatch, isCorrectAnswer, roundPool, round, score, activeAttr,
  } = props;
  const isAbsoluteWin = score === roundPool.length * 5;
  const showModalCondition = isCorrectAnswer && round >= roundPool.length - 1;
  const localAudio = new Audio();
  if (showModalCondition) {
    localAudio.src = isAbsoluteWin ? ownageWinAudio : winAudio;
  }
  localAudio.play();

  return (
    <Modal
      className="win-modal"
      dialogClassName="win-modal__dialog"
      autoFocus
      keyboard
      show={showModalCondition}
      onHide={() => { dispatch(heroesLoaded()); }}
      backdrop="static"
    >
      <ModalTitle>
        <h4 className="text-center mt-2">
          {isAbsoluteWin ? 'GG WP!' : 'Not bad, but not perfect'}
        </h4>
      </ModalTitle>
      <ModalBody>
        <p className="mt-2">
          {`${isAbsoluteWin ? 'OWNAGE!!! ' : ''}You got ${score} points out of ${roundPool.length * 5}`}
        </p>
      </ModalBody>
      <ModalFooter className={isAbsoluteWin ? 'win-modal__footer win-modal__footer_absolute-win' : 'win-modal__footer'}>
        {isAbsoluteWin
          ? <Button onClick={() => { dispatch(heroesLoaded('')); }}>Ok, I am a nerd</Button>
          : <Button onClick={() => { dispatch(heroesLoaded(activeAttr)); }}>Try again</Button>}
      </ModalFooter>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  const {
    score, isCorrectAnswer, roundPool, round, activeAttr,
  } = state;
  return ({
    score, isCorrectAnswer, roundPool, round, activeAttr,
  });
};

export default connect(mapStateToProps)(WinModal);
