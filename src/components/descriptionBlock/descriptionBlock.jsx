import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import sourceImage from '../../assets/images/dota2soundhound.png';
import './descriptionBlock.scss';

export default function DescriptionBlock() {
  return (
    <Col lg={8} md={8} sm={8} xs={12} className="descriptionBlock">
      <Row>
        <Col className="text-center" lg={4} md={4} sm={12} xs={12}>
          <Image className="img-fluid" src={sourceImage} alt="hero" />
        </Col>
        <Col lg={8} md={8} sm={12} xs={12}>
          <h3 className="text-center">Magna</h3>
          <span>Second name</span>
          <AudioPlayer customAdditionalControls={[]} />
        </Col>
      </Row>
      <Row>
        <Col>
          <span>Description description description description description</span>
        </Col>
      </Row>
    </Col>
  );
}
