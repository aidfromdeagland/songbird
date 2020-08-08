import React from 'react';
import './questionBlock.scss';
import {
  Image, Col, Row,
} from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../themes-change/rhap-theme.css';
import { connect } from 'react-redux';
import frameImage from '../../assets/images/hero_hud_sized.png';
import heroesMap from '../../dota2data/heroesMap';

function QuestionBlock(props) {
  const { heroes } = props;
  const heroImageUrl = require(`../../assets/images/heroes/selection/${heroes[0].name}_png.png`);
  const heroAudioUrl = require(`../../assets/sounds/heroes/${heroesMap[heroes[0].name]}_spawn_03.mp3`);
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
          <h3 className="text-center">{heroes[0].localized_name}</h3>
          <AudioPlayer
            customAdditionalControls={[]}
            src={heroAudioUrl}
          />
        </div>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({ heroes: state.heroes });

export default connect(mapStateToProps)(QuestionBlock);
