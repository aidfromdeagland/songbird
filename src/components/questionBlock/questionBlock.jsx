import React from 'react';
import './questionBlock.scss';
import {
  Image, Col, Row,
} from 'react-bootstrap';
import 'react-h5-audio-player/lib/styles.css';
import '../../themes-change/rhap-theme.css';
import { connect } from 'react-redux';
import frameImage from '../../assets/images/hero_hud_sized.png';
import MyAudio from '../myAudio/myAudio';
import stubImageUrl from '../../assets/images/question.png';

function QuestionBlock(props) {
  const { roundPool, round, isCorrectAnswer } = props;
  // eslint-disable-next-line no-console
  console.log(`tip: ${roundPool[round].localized_name}`);
  const heroImageUrl = require(`../../assets/images/heroes/selection/${roundPool[round].name}_png.png`);

  return (
    <Row className="questionBlock justify-content-center">
      <Col xl={4} lg={4} md={5} sm={6} xs={12}>
        <div className="questionBlock__presentation">
          <Image
            className={isCorrectAnswer ? 'questionBlock__image' : 'questionBlock__image questionBlock__image_stub'}
            src={isCorrectAnswer ? heroImageUrl : stubImageUrl}
            alt="current hero"
          />
          <Image className="questionBlock__frame" src={frameImage} alt="frame" />
        </div>
      </Col>
      <Col xl={8} lg={8} md={7} sm={6} xs={12}>
        <div className="questionBlock__media">
          <h3 className={isCorrectAnswer
            ? 'text-center questionBlock__hero-name questionBlock__hero-name_revealed'
            : 'text-center questionBlock__hero-name'}
          >
            {isCorrectAnswer ? roundPool[round].localized_name : roundPool[round].localized_name.replace(/\w/gi, '*')}
          </h3>
          <MyAudio currentHero={roundPool[round]} />
        </div>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => {
  const { roundPool, round, isCorrectAnswer } = state;
  return ({ roundPool, round, isCorrectAnswer });
};

export default connect(mapStateToProps)(QuestionBlock);
