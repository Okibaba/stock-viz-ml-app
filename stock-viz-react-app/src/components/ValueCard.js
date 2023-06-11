import React from 'react';
import { Card, CardBody, CardText, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const ValueCard = ({ word, number }) => {

  const cardStyle = {
    backgroundColor: number >= 0 ? 'lightgreen' : 'salmon',
    borderRadius: '15px',
    width: '200rem',
    height: '15rem',    
  };

  const isPositive = number >= 0;

  return (
    <Col md={1} className="d-flex justify-content-center">
      <Card className="value-card" style={cardStyle}>
        <CardBody className='d-flex flex-column justify-content-center align-items-center'>
          <CardText>
            {word} {number+'%'}{' '}
            <FontAwesomeIcon 
              icon={isPositive ? faArrowUp : faArrowDown} 
              style={{ color: isPositive ? 'green' : 'red' }} 
            />
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ValueCard;