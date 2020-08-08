import React, {Component} from 'react';
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

class QuestionBlock extends Component {
  constructor(props) {
    super(props);
    this.audioPlayer = React.createRef();
  }

  render() {
    const { heroes } = this.props;
    const heroImageUrl = require(`../../assets/images/heroes/selection/${heroes[0].name}_png.png`);
    const heroAudioUrlsMap = {
      recognitionPhrases: {
        spawn: require(`../../assets/sounds/heroes/${heroesMap[heroes[0].name]}_spawn_03.mp3`),
        kill: require(`../../assets/sounds/heroes/${heroesMap[heroes[0].name]}_kill_01.mp3`),
        respawn: require(`../../assets/sounds/heroes/${heroesMap[heroes[0].name]}_respawn_03.mp3`),
      },
      negativePhrases: {
        death: require(`../../assets/sounds/heroes/${heroesMap[heroes[0].name]}_death_01.mp3`),
        lose: require(`../../assets/sounds/heroes/${heroesMap[heroes[0].name]}_lose_01.mp3`),
      },
      positivePhrase: require(`../../assets/sounds/heroes/${heroesMap[heroes[0].name]}_win_01.mp3`),
    };

    let currentAudioIndex = 0;
    const audioKeys = Object.keys(heroAudioUrlsMap.recognitionPhrases);

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
            <h3 className="text-center">{heroes[0].localized_name.replace(/\w/gi, '*')}</h3>
            <AudioPlayer
              ref={this.audioPlayer}
              src={heroAudioUrlsMap.recognitionPhrases[audioKeys[currentAudioIndex]]}
              layout="stacked"
              customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
              customProgressBarSection={['PROGRESS_BAR']}
              showSkipControls
              showJumpControls={false}
              onClickPrevious={() => {
                currentAudioIndex = currentAudioIndex === 0
                  ? audioKeys.length - 1 : currentAudioIndex - 1;
                this.audioPlayer.current.audio.current.src = heroAudioUrlsMap
                  .recognitionPhrases[audioKeys[currentAudioIndex]];
              }}
              onClickNext={() => {
                currentAudioIndex = currentAudioIndex >= audioKeys.length - 1
                  ? 0 : currentAudioIndex + 1;
                this.audioPlayer.current.audio.current.src = heroAudioUrlsMap
                  .recognitionPhrases[audioKeys[currentAudioIndex]];
              }}
            />
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({ heroes: state.heroes });

export default connect(mapStateToProps)(QuestionBlock);
