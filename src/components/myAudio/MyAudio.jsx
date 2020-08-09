import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../themes-change/rhap-theme.css';
import { connect } from 'react-redux';
import heroesMap from '../../dota2data/heroesMap';

const soundsPathPrefix = 'assets/sounds/heroes';

class MyAudio extends Component {
  constructor(props) {
    super(props);
    this.audioPlayer = React.createRef();
  }

  render() {
    const { currentHero } = this.props;
    const heroAudioUrlsMap = {
      recognitionPhrases: {
        spawn: require(`../../${soundsPathPrefix}/${heroesMap[currentHero.name]}_spawn_03.mp3`),
        kill: require(`../../${soundsPathPrefix}/${heroesMap[currentHero.name]}_kill_01.mp3`),
        respawn: require(`../../${soundsPathPrefix}/${heroesMap[currentHero.name]}_respawn_03.mp3`),
      },
    };

    let currentAudioIndex = 0;
    const audioKeys = Object.keys(heroAudioUrlsMap.recognitionPhrases);

    return (
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
    );
  }
}

const mapStateToProps = (state) => {
  const { heroesPool, heroesRound, round } = state;
  return ({ heroesPool, heroesRound, round });
};

export default connect(mapStateToProps)(MyAudio);
