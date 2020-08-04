import React from 'react';
import './app.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './header/header';
import QuestionBlock from './questionBlock/questionBlock';
import VariantsBlock from './variantsBlock/variantsBlock';
import DescriptionBlock from './descriptionBlock/descriptionBlock';

export default function App() {
  return (
    <Container>
      <Header />
      <QuestionBlock />
      <Row>
        <Col>
          <VariantsBlock />
        </Col>
        <Col>
          <DescriptionBlock />
        </Col>
      </Row>
    </Container>
  );
}
