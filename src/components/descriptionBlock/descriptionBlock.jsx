import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import sourceImage from '../../assets/images/dota2soundhound.png';
import './descriptionBlock.scss';

export default function DescriptionBlock() {
  return (
    <Col xl={8} lg={8} md={7} sm={6} xs={12} className="descriptionBlock">
      <Row>
        <Col className="text-center" lg={4} md={4} sm={12} xs={12}>
          <Image className="img-fluid" src={sourceImage} alt="hero" />
        </Col>
        <Col lg={8} md={8} sm={12} xs={12} className="d-flex flex-column justify-content-center">
          <h3 className="text-center">Magna</h3>
          <AudioPlayer
            layout="stacked"
            customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
            customProgressBarSection={['PROGRESS_BAR']}
            showSkipControls
            showJumpControls={false}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Primary attribute:
            {' '}
            <span>Str</span>
          </p>
          <p>
            Attack type:
            {' '}
            <span>Melee</span>
          </p>
          <p>
            Roles:
            {' '}
            <span>Nuker, Disabler</span>
          </p>
        </Col>
      </Row>
    </Col>
  );
}
