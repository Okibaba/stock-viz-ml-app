import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const ValueCard = ({ value }) => {
  const isPositive = value >= 0;

  return (
    <Card>
      <CardBody>
        <CardText>
          {value}{' '}
          <FontAwesomeIcon 
            icon={isPositive ? faArrowUp : faArrowDown} 
            style={{ color: isPositive ? 'green' : 'red' }} 
          />
        </CardText>
      </CardBody>
    </Card>
  );
};

export default ValueCard;
