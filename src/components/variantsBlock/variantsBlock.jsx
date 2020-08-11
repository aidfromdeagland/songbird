import React from 'react';
import './variantsBlock.scss';
import {
  ButtonGroup, Button, Image, Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import heroesMap from '../../dota2data/heroesMap';
import {
  heroSelected, addClickedVariant, answeredCorrect, heroesLoaded,
} from '../../actions';

const soundsPathPrefix = 'assets/sounds/heroes';
const localAudio = new Audio();

function VariantsBlock(props) {
  const {
    dispatch, roundPool, variantsPool, round, selectedVariants, isCorrectAnswer,
  } = props;
  const heroAudioUrlsMap = {
    negativePhrases: {
      death: require(`../../${soundsPathPrefix}/${heroesMap[roundPool[round].name]}_death_01.mp3`),
      lose: require(`../../${soundsPathPrefix}/${heroesMap[roundPool[round].name]}_lose_01.mp3`),
    },
    positivePhrase: require(`../../${soundsPathPrefix}/${heroesMap[roundPool[round].name]}_win_01.mp3`),
  };
  const negativeAudioKeys = Object.keys(heroAudioUrlsMap.negativePhrases);

  return (
    <Col xl={4} lg={4} md={5} sm={6} xs={12} className="variantsBlock">
      <ButtonGroup className="w-100 variantsBlock__buttons" vertical>
        { variantsPool.map((hero) => {
          const heroImageUrl = require(`../../assets/images/heroes/icons/${hero.name}_png.png`);
          const correctClassName = 'variantsBlock__button_correct';
          const incorrectClassName = 'variantsBlock__button_incorrect';
          let buttonClassName = 'variantsBlock__button ';
          if (selectedVariants.includes(hero.id)) {
            buttonClassName += hero.id === roundPool[round].id
              ? correctClassName
              : incorrectClassName;
          }
          return (
            <Button
              className={buttonClassName}
              key={hero.id}
              onClick={() => {
                dispatch(heroSelected(hero));
                if (!isCorrectAnswer) {
                  if (hero.id === roundPool[round].id) {
                    dispatch(answeredCorrect());
                    if (localAudio.src !== heroAudioUrlsMap.positivePhrase) {
                      localAudio.src = heroAudioUrlsMap.positivePhrase;
                    }
                    if (round < roundPool.length - 1) {
                      localAudio.play();
                    }
                  } else {
                    const negativeAnswerIndex = Math.floor(Math.random() * negativeAudioKeys.length);
                    const currentNegativeSrc = heroAudioUrlsMap.negativePhrases[negativeAudioKeys[negativeAnswerIndex]];
                    if (localAudio.src !== currentNegativeSrc) {
                      localAudio.src = currentNegativeSrc;
                    }
                    localAudio.play();
                  }
                  if (!selectedVariants.includes(hero.id)) {
                    dispatch(addClickedVariant(hero.id));
                  }
                }
              }}
            >
              <Image
                className="variantsBlock__button-icon"
                src={heroImageUrl}
                alt={`${hero.localized_name}`}
                width={30}
                height={30}
              />
              <span className="ml-2 variantsBlock__button-title">{hero.localized_name}</span>
            </Button>
          );
        })}
      </ButtonGroup>
    </Col>
  );
}

const mapStateToProps = (state) => {
  const {
    roundPool, variantsPool, round, selectedVariants, isCorrectAnswer,
  } = state;
  return ({
    roundPool, variantsPool, round, selectedVariants, isCorrectAnswer,
  });
};

export default connect(mapStateToProps)(VariantsBlock);
