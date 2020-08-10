import React from 'react';
import './variantsBlock.scss';
import {
  ButtonGroup, Button, Image, Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import heroesMap from '../../dota2data/heroesMap';
import {heroSelected} from '../../actions';

const soundsPathPrefix = 'assets/sounds/heroes';
const localAudio = new Audio();

function VariantsBlock(props) {
  const { roundPool, variantsPool, round } = props;
  console.log(props);
  const heroAudioUrlsMap = {
    negativePhrases: {
      death: require(`../../${soundsPathPrefix}/${heroesMap[roundPool[round].name]}_death_01.mp3`),
      lose: require(`../../${soundsPathPrefix}/${heroesMap[roundPool[round].name]}_lose_01.mp3`),
    },
    positivePhrase: require(`../../${soundsPathPrefix}/${heroesMap[roundPool[round].name]}_win_01.mp3`),
  };
  const negativeAudioKeys = Object.keys(heroAudioUrlsMap.negativePhrases);
  const { dispatch } = props;

  return (
    <Col className="variantsBlock" xl={4} lg={4} md={5} sm={6} xs={12}>
      <ButtonGroup className="w-100 variantsBlock__buttons" vertical>
        { variantsPool.map((hero, index) => {
          const heroImageUrl = require(`../../assets/images/heroes/icons/${variantsPool[index].name}_png.png`);
          return (
            <Button
              className="variantsBlock__button"
              key={variantsPool[index].id}
              onClick={() => {
                dispatch(heroSelected(variantsPool[index]));
                if (variantsPool[index].id === roundPool[round].id) {
                  if (localAudio.src !== heroAudioUrlsMap.positivePhrase) {
                    localAudio.src = heroAudioUrlsMap.positivePhrase;
                  }
                } else {
                  const negativeAnswerIndex = Math.floor(Math.random() * negativeAudioKeys.length);
                  const currentNegativeSrc = heroAudioUrlsMap.negativePhrases[negativeAudioKeys[negativeAnswerIndex]];
                  if (localAudio.src !== currentNegativeSrc) {
                    localAudio.src = currentNegativeSrc;
                  }
                }
                localAudio.play();
              }}
            >
              <Image src={heroImageUrl} alt={`${hero.localized_name}`} width={30} height={30} />
              <span className="ml-2 variantsBlock__button-title">{variantsPool[index].localized_name}</span>
            </Button>
          );
        })}
      </ButtonGroup>
    </Col>
  );
}

const mapStateToProps = (state) => {
  const {
    roundPool, variantsPool, round,
  } = state;
  return ({
    roundPool, variantsPool, round,
  });
};

export default connect(mapStateToProps)(VariantsBlock);
