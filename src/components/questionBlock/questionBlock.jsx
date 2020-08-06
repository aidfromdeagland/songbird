import React from 'react';
import './questionBlock.scss';
import {
  Image, Col, Row,
} from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import sourceImage from '../../assets/images/heroes/npc_dota_hero_abaddon_png.png';
import frameImage from '../../assets/images/hero_hud_sized.png';

export default function QuestionBlock() {
  return (
    <Row className="questionBlock justify-content-center">
      <Col xl={4} lg={4} md={5} sm={6} xs={12}>
        <div className="questionBlock__presentation">
          <Image className="questionBlock__image" src={sourceImage} alt="current hero" />
          <Image className="questionBlock__frame" src={frameImage} alt="frame" />
        </div>
      </Col>
      <Col xl={8} lg={8} md={7} sm={6} xs={12}>
        <div className="questionBlock__media">
          <h3 className="text-center">Magna</h3>
          <AudioPlayer customAdditionalControls={[]} />
        </div>
      </Col>
    </Row>
  );
}
