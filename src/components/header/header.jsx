import React from 'react';
import './header.scss';
import { Image, Row, ListGroup } from 'react-bootstrap';
import logoImage from '../../images/dota2csgo.png';

export default function Header() {
  return (
    <div className="header">
      <Row className="justify-content-around align-items-center">
        <Image src={logoImage} alt="logo" width={64} height={64} />
        <h1>Sound Hound</h1>
        <span>Score: 2</span>
      </Row>
      <ListGroup horizontal className="justify-content-center align-items-center">
        <ListGroup.Item>All</ListGroup.Item>
        <ListGroup.Item>Strength</ListGroup.Item>
        <ListGroup.Item>Agility</ListGroup.Item>
        <ListGroup.Item>Intellect</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
