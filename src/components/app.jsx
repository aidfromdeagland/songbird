import React from 'react';
import './app.scss';
import { Container, Row, Button } from 'react-bootstrap';
import Header from './header/header';
import QuestionBlock from './questionBlock/questionBlock';
import VariantsBlock from './variantsBlock/variantsBlock';
import DescriptionBlock from './descriptionBlock/descriptionBlock';

export default function App() {
  return (
    <div className="app">
      <Container>
        <Header />
        <QuestionBlock />
        <Row>
          <VariantsBlock />
          <DescriptionBlock />
        </Row>
        <Button className="mt-1" block>Next</Button>
      </Container>
    </div>
  );
}
