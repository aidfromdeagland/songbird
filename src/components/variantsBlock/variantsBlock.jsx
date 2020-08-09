import React from 'react';
import './variantsBlock.scss';
import {
  ButtonGroup, Button, Image, Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { shuffleArray, getSlicedArray } from '../../utils/arrayhelpers';
import heroesMap from '../../dota2data/heroesMap';

const soundsPathPrefix = 'assets/sounds/heroes';
const localAudio = new Audio();

function VariantsBlock(props) {
  const { heroesPool, heroesRound, round } = props;
  const otherHeroes = getSlicedArray(shuffleArray(heroesPool.filter((hero) => hero !== heroesRound[round])), 5);
  const buttonHeroes = shuffleArray([heroesRound[round], ...otherHeroes]);
  const heroAudioUrlsMap = {
    negativePhrases: {
      death: require(`../../${soundsPathPrefix}/${heroesMap[heroesRound[round].name]}_death_01.mp3`),
      lose: require(`../../${soundsPathPrefix}/${heroesMap[heroesRound[round].name]}_lose_01.mp3`),
    },
    positivePhrase: require(`../../${soundsPathPrefix}/${heroesMap[heroesRound[round].name]}_win_01.mp3`),
  };
  const negativeAudioKeys = Object.keys(heroAudioUrlsMap.negativePhrases);

  return (
    <Col className="variantsBlock" xl={4} lg={4} md={5} sm={6} xs={12}>
      <ButtonGroup className="w-100 variantsBlock__buttons" vertical>
        { buttonHeroes.map((hero, index) => {
          const heroImageUrl = require(`../../assets/images/heroes/icons/${buttonHeroes[index].name}_png.png`);
          return (
            <Button
              className="variantsBlock__button"
              key={buttonHeroes[index].id}
              onClick={() => {
                if (buttonHeroes[index].id === heroesRound[round].id) {
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
              <span className="ml-2 variantsBlock__button-title">{buttonHeroes[index].localized_name}</span>
            </Button>
          );
        })}
      </ButtonGroup>
    </Col>
  );
}

const mapStateToProps = (state) => {
  const { heroesPool, heroesRound, round } = state;
  return ({ heroesPool, heroesRound, round });
};

export default connect(mapStateToProps)(VariantsBlock);
