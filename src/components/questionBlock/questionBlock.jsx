import React from 'react';
import './questionBlock.scss';
import {
  Image, Col, Row,
} from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import sourceImage from '../../assets/images/dota2soundhound.png';

export default function QuestionBlock() {
  return (
    <Row className=" questionBlockjustify-content-center">
      <Col lg={3} md={3} sm={4} xs={12}>
        <Image className="questionBlock__image" src={sourceImage} alt="current" />
      </Col>
      <Col lg={9} md={9} sm={8} xs={12}>
        <h3>Magna</h3>
        <AudioPlayer customAdditionalControls={[]} />
      </Col>
    </Row>
  );
}
