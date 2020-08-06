import React from 'react';
import './variantsBlock.scss';
import {
  ButtonGroup, Button, Image, Col,
} from 'react-bootstrap';
import logoImage from '../../assets/images/dota2soundhound.png';

export default function VariantsBlock() {
  return (
    <Col className="variantsBlock" xl={4} lg={4} md={5} sm={6} xs={12}>
      <ButtonGroup className="w-100 variantsBlock__buttons" vertical>
        <Button>
          <Image src={logoImage} alt="button logo" width={30} height={30} />
        </Button>
        <Button>
          <Image src={logoImage} alt="button logo" width={30} height={30} />
        </Button>
        <Button>
          <Image src={logoImage} alt="button logo" width={30} height={30} />
        </Button>
        <Button>
          <Image src={logoImage} alt="button logo" width={30} height={30} />
        </Button>
        <Button>
          <Image src={logoImage} alt="button logo" width={30} height={30} />
        </Button>
        <Button>
          <Image src={logoImage} alt="button logo" width={30} height={30} />
        </Button>
      </ButtonGroup>
    </Col>
  );
}
