import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.scss';
import {
  Image, Row, ButtonGroup, Button, Col,
} from 'react-bootstrap';
import logoImage from '../../assets/images/dota2soundhound.png';
import strIcon from '../../assets/images/icons/str_symbol.png';
import agiIcon from '../../assets/images/icons/agi_symbol.png';
import intIcon from '../../assets/images/icons/int_symbol.png';
import {
  heroesLoaded,
} from '../../actions';

class Header extends Component {
  componentDidMount() {
  }

  render() {
    const { dispatch, score, isCorrectAnswer } = this.props;
    return (
      <Row className="header">
        <Col>
          <Row>
            <Col className="d-flex align-items-center">
              <Image src={logoImage} alt="logo" width={64} height={64} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <h1>Sound Hound</h1>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <span className={isCorrectAnswer ? 'header__score header__score_updated' : 'header__score'}>{score}</span>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <ButtonGroup>
                <Button
                  className="btn-outline-primary"
                  onClick={() => {
                    dispatch(heroesLoaded(''));
                  }}
                >
                  All
                </Button>
                <Button
                  className="btn-outline-danger"
                  onClick={() => {
                    dispatch(heroesLoaded('str'));
                  }}
                >
                  <Image src={strIcon} alt="strength" width={45} height={45} />
                </Button>
                <Button
                  className="btn-outline-success"
                  onClick={() => {
                    dispatch(heroesLoaded('agi'));
                  }}
                >
                  <Image src={agiIcon} alt="agility" width={45} height={45} />
                </Button>
                <Button
                  className="btn-outline-info"
                  onClick={() => {
                    dispatch(heroesLoaded('int'));
                  }}
                >
                  <Image src={intIcon} alt="intelligence" width={45} height={45} />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { score, isCorrectAnswer } = state;
  return ({ score, isCorrectAnswer });
};

export default connect(mapStateToProps)(Header);
