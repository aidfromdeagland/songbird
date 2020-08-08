import React from 'react';
import './variantsBlock.scss';
import {
  ButtonGroup, Button, Image, Col,
} from 'react-bootstrap';

export default function VariantsBlock(props) {
  return (
    <Col className="variantsBlock" xl={4} lg={4} md={5} sm={6} xs={12}>
      <ButtonGroup className="w-100 variantsBlock__buttons" vertical>
        {/*{store.heroes.map((hero) => (
          <Button>
            <Image src={logoImage} alt={`${hero.localized_name}`} logo width={30} height={30} />
          </Button>
        ))}*/}
      </ButtonGroup>
    </Col>
  );
}
