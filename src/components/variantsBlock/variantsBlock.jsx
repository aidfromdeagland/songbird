import React from 'react';
import './variantsBlock.scss';
import {
  ButtonGroup, Button, Image, Col,
} from 'react-bootstrap';
import logoImage from '../../assets/images/dota2soundhound.png';

export default function VariantsBlock() {
  return (
    <Col className="variantsBlock" lg={4} md={4} sm={4} xs={12}>
      <ButtonGroup className="w-100" vertical>
        <Button className="btn-dark">
          <Image src={logoImage} alt="button logo" width={30} height={30} />
        </Button>
        <Button className="btn-dark">
          <Image src={logoImage} alt="button logo" width={30} height={30} />
        </Button>
        <Button className="btn-dark">
          <Image src={logoImage} alt="button logo" width={30} height={30} />
        </Button>
        <Button className="btn-dark">
          <Image src={logoImage} alt="button logo" width={30} height={30} />
        </Button>
        <Button className="btn-dark">
          <Image src={logoImage} alt="button logo" width={30} height={30} />
        </Button>
        <Button className="btn-dark">
          <Image src={logoImage} alt="button logo" width={30} height={30} />
        </Button>
      </ButtonGroup>
    </Col>
  );
}
