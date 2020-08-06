import React from 'react';
import './header.scss';
import {
  Image, Row, ButtonGroup, Button, Col,
} from 'react-bootstrap';
import logoImage from '../../assets/images/dota2soundhound.png';
import strIcon from '../../assets/images/icons/str_symbol.png';
import agiIcon from '../../assets/images/icons/agi_symbol.png';
import intIcon from '../../assets/images/icons/int_symbol.png';

export default function Header() {
  return (
    <Row className="header">
      <Col>
        <Row className="justify-content-between">
          <Col>
            <Image src={logoImage} alt="logo" width={64} height={64} />
          </Col>
          <Col className="text-center">
            <h1>Sound Hound</h1>
          </Col>
          <Col className="text-right">
            <p>
              Score:
              <span className="font-weight-bold text-danger">2</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <ButtonGroup>
              <Button className="btn-outline-primary">All</Button>
              <Button className="btn-outline-danger">
                <Image src={strIcon} alt="strength" width={45} height={45} />
              </Button>
              <Button className="btn-outline-success">
                <Image src={agiIcon} alt="agility" width={45} height={45} />
              </Button>
              <Button className="btn-outline-info">
                <Image src={intIcon} alt="intelligence" width={45} height={45} />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
