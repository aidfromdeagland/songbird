import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import MyAudio from '../myAudio/myAudio';
import 'react-h5-audio-player/lib/styles.css';
import './descriptionBlock.scss';

const attrShortsMap = {
  str: 'strength',
  agi: 'agility',
  int: 'intellect',
};

function DescriptionBlock(props) {
  const { heroSelected, isCorrectAnswer, incorrectVariants } = props;
  const heroImageUrl = require(`../../assets/images/heroes/preview/${heroSelected.name}_png.png`);

  return (
    <Col xl={8} lg={8} md={7} sm={6} xs={12} className="descriptionBlock">
      <Row>
        <Col className="d-flex justify-content-center align-items-center" lg={4} md={4} sm={12} xs={12}>
          <Image className="descriptionBlock__image" src={heroImageUrl} alt="hero" />
        </Col>
        <Col lg={8} md={8} sm={12} xs={12} className="d-flex flex-column justify-content-center">
          <h4 className=" text_center descriptionBlock__text descriptionBlock__text_whitespaced">
            {heroSelected.localized_name}
          </h4>
          <MyAudio currentHero={heroSelected} />
        </Col>
      </Row>
      <Row>
        { isCorrectAnswer || incorrectVariants.length
          ? (
            <Col>
              <p className="descriptionBlock__text">
                Primary attribute:
                {' '}
                {attrShortsMap[heroSelected.primary_attr]}
              </p>
              <p className="descriptionBlock__text">
                Attack type:
                {' '}
                {heroSelected.attack_type.toLowerCase()}
              </p>
              <p className="descriptionBlock__text">
                Roles:
                {' '}
                {heroSelected.roles.join(', ').toLowerCase()}
              </p>
            </Col>
          )
          : (
            <p className="descriptionBlock__text text-center text-danger">
              play the hero
              {'\''}
              s voice via main player and choose the correct hero among all variants
            </p>
          )}
      </Row>
    </Col>
  );
}

const mapStateToProps = (state) => {
  const { heroSelected, isCorrectAnswer, incorrectVariants } = state;
  return ({ heroSelected, isCorrectAnswer, incorrectVariants });
};

export default connect(mapStateToProps)(DescriptionBlock);
