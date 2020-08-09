import React from 'react';
import './questionBlock.scss';
import {
  Image, Col, Row,
} from 'react-bootstrap';
import 'react-h5-audio-player/lib/styles.css';
import '../../themes-change/rhap-theme.css';
import { connect } from 'react-redux';
import frameImage from '../../assets/images/hero_hud_sized.png';
import MyAudio from '../myAudio/MyAudio';

function QuestionBlock(props) {
  const { heroesRound, round } = props;
  const heroImageUrl = require(`../../assets/images/heroes/selection/${heroesRound[round].name}_png.png`);

  return (
    <Row className="questionBlock justify-content-center">
      <Col xl={4} lg={4} md={5} sm={6} xs={12}>
        <div className="questionBlock__presentation">
          <Image className="questionBlock__image" src={heroImageUrl} alt="current hero" />
          <Image className="questionBlock__frame" src={frameImage} alt="frame" />
        </div>
      </Col>
      <Col xl={8} lg={8} md={7} sm={6} xs={12}>
        <div className="questionBlock__media">
          <h3 className="text-center">{heroesRound[round].localized_name.replace(/\w/gi, '*')}</h3>
          <MyAudio currentHero={heroesRound[round]} />
        </div>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => {
  const { heroesRound, round } = state;
  return ({ heroesRound, round });
};

export default connect(mapStateToProps)(QuestionBlock);
