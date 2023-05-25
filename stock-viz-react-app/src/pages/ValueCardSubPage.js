import React from 'react';
import { Row, Container } from 'reactstrap';
import ValueCard from '../components/ValueCard';

const ValueCardSubPage = () => {
  return (
    <Container className='d-flex justify-content-right'>
    <Row>
      <ValueCard word="S&P" number={15} />
      <ValueCard word="NASDAQ" number={-5} />
      <ValueCard word="DJIA" number={20} />
      <ValueCard word="S&P" number={15} />
      <ValueCard word="NASDAQ" number={-5} />
      <ValueCard word="DJIA" number={20} />
    </Row>
    </Container>
  );
};

export default ValueCardSubPage;
