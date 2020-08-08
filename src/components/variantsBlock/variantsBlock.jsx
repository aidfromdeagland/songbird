import React from 'react';
import './variantsBlock.scss';
import {
  ButtonGroup, Button, Image, Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';

function VariantsBlock(props) {
  const { heroes } = props;

  return (
    <Col className="variantsBlock" xl={4} lg={4} md={5} sm={6} xs={12}>
      <ButtonGroup className="w-100 variantsBlock__buttons" vertical>
        {heroes.map((hero, index) => {
          const heroImageUrl = require(`../../assets/images/heroes/icons/${heroes[index].name}_png.png`);
          return (
            <Button className="variantsBlock__button" key={heroes[index].id}>
              <Image src={heroImageUrl} alt={`${hero.localized_name}`} width={30} height={30} />
              <span className="ml-2 variantsBlock__button-title">{heroes[index].localized_name}</span>
            </Button>
          );
        })}
      </ButtonGroup>
    </Col>
  );
}

const mapStateToProps = (state) => ({ heroes: state.heroes });

export default connect(mapStateToProps)(VariantsBlock);
