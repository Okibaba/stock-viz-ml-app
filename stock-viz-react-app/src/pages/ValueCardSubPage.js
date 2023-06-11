import React from 'react';
import { Row, Container } from 'reactstrap';
import ValueCard from '../components/ValueCard';

const ValueCardSubPage = () => {

  const cardContainerStyle = {
    display: 'd-flex',
    justifyContent: 'center',

  };

  return (
    <>
      <Container className='d-flex justify-content-right margin-bottom'>
        <Row>
          <ValueCard word="S&P 500" number={15} />
          <ValueCard word="NASDAQ" number={-5} />
          <ValueCard word="NYSE" number={20} />
          <ValueCard word="FTSE" number={20} />

        </Row>


      </Container>

      <Container className='d-flex justify-content-right margin-bottom'>
        <Row>
          <ValueCard word="VIX" number={-12} />
          <ValueCard word="Crude Oil" number={-5} />
          <ValueCard word="DJIA" number={20} />
          <ValueCard word="Bitcoin USD" number={-2.8} />

        </Row>


      </Container>

    </>
  );
};

export default ValueCardSubPage;
