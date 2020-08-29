import React from 'react';
import './variantsBlock.scss';
import {
  ButtonGroup, Button, Image, Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  heroSelected, addIncorrectVariant, answeredCorrect,
} from '../../redux/actions/actions';

const soundsPathPrefix = 'assets/sounds/heroes';
const localAudio = new Audio();

function VariantsBlock(props) {
  const {
    dispatch, roundPool, variantsPool, round, incorrectVariants, isCorrectAnswer,
  } = props;
  const currentHero = roundPool[round];
  const heroAudioUrlsMap = {
    negativePhrases: {
      death: require(`../../${soundsPathPrefix}/${currentHero.db_short}_death_01.mp3`),
      lose: require(`../../${soundsPathPrefix}/${currentHero.db_short}_lose_01.mp3`),
    },
    positivePhrase: require(`../../${soundsPathPrefix}/${currentHero.db_short}_win_01.mp3`),
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
          if (incorrectVariants.includes(hero.id)) {
            buttonClassName += incorrectClassName;
          }
          if (isCorrectAnswer && hero.id === roundPool[round].id) {
            buttonClassName += correctClassName;
          }
          return (
            <Button
              className={buttonClassName}
              key={hero.id}
              onClick={() => {
                dispatch(heroSelected(hero));
                if (!isCorrectAnswer) {
                  if (hero.id === roundPool[round].id) {
                    dispatch(answeredCorrect(incorrectVariants.length));
                    if (localAudio.src !== heroAudioUrlsMap.positivePhrase) {
                      localAudio.src = heroAudioUrlsMap.positivePhrase;
                    }
                    if (round < roundPool.length - 1) {
                      localAudio.play();
                    }
                  } else if (!incorrectVariants.includes(hero.id)) {
                    const negativeAnswerIndex = Math.floor(Math.random() * negativeAudioKeys.length);
                    const currentNegativeSrc = heroAudioUrlsMap
                      .negativePhrases[negativeAudioKeys[negativeAnswerIndex]];
                    if (localAudio.src !== currentNegativeSrc) {
                      localAudio.src = currentNegativeSrc;
                    }
                    dispatch(addIncorrectVariant(hero.id));
                    localAudio.play();
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
    roundPool, variantsPool, round, incorrectVariants, isCorrectAnswer,
  } = state;
  return ({
    roundPool, variantsPool, round, incorrectVariants, isCorrectAnswer,
  });
};

export default connect(mapStateToProps)(VariantsBlock);
