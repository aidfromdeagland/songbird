import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import MyAudio from '../myAudio/MyAudio';
import 'react-h5-audio-player/lib/styles.css';
import './descriptionBlock.scss';

function DescriptionBlock(props) {
  const { roundPool, round } = props;
  const heroImageUrl = require(`../../assets/images/heroes/preview/${roundPool[round].name}_png.png`);

  return (
    <Col xl={8} lg={8} md={7} sm={6} xs={12} className="descriptionBlock">
      <Row>
        <Col className="text-center" lg={4} md={4} sm={12} xs={12}>
          <Image className="descriptionBlock__image" src={heroImageUrl} alt="hero" />
        </Col>
        <Col lg={8} md={8} sm={12} xs={12} className="d-flex flex-column justify-content-center">
          <h3 className="text-center">Magna</h3>
          <MyAudio currentHero={roundPool[round]} />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Primary attribute:
            {' '}
            <span>{roundPool[round].primary_attr}</span>
          </p>
          <p>
            Attack type:
            {' '}
            <span>{roundPool[round].attack_type}</span>
          </p>
          <p>
            Roles:
            {' '}
            { roundPool[round].roles.map((role) => <span key={role}>{role}</span>) }
          </p>
        </Col>
      </Row>
    </Col>
  );
}

const mapStateToProps = (state) => {
  const { roundPool, round } = state;
  return ({ roundPool, round });
};

export default connect(mapStateToProps)(DescriptionBlock);
