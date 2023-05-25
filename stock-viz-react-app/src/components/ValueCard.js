// import React from 'react';
// import { Card, CardBody, CardText, Col } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

// const ValueCard = ({ word, number }) => {
  const cardStyle = {
    backgroundColor: number >= 0 ? 'lightgreen' : 'salmon',
    borderRadius: '15px',
    width: '100rem', height: '7rem',
  };
//   const isPositive = number >= 0;

//   return (
//     <Col md={1} className="d-flex justify-content-center">
//       <Card className="value-card" style={cardStyle}>
//         <CardBody className='d-flex flex-column justify-content-center align-items-center'>
//           <CardText>
//             {word} {number}{' '}
//             <FontAwesomeIcon 
//               icon={isPositive ? faArrowUp : faArrowDown} 
//               style={{ color: isPositive ? 'green' : 'red' }} 
//             />
//           </CardText>
//         </CardBody>
//       </Card>
//     </Col>
//   );
// };

// export default ValueCard;

// import { Card, CardBody, CardText, Col } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
//import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


const ValueCard = ({ word, number }) => {
  const cardStyle = {
    backgroundColor: number >= 0 ? 'lightgreen' : 'salmon',
    borderRadius: '15px',
  };

  return (
    <Card style={cardStyle} className="value-card">
      <CardBody className="d-flex align-items-center justify-content-center">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <h4 className="mb-0">{word}</h4>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <h4 className="mb-0">{number}</h4>
            {number >= 0 ? (
              <faArrowUp className="text-success ml-2" />
            ) : (
              <faArrowDown className="text-danger ml-2" />
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ValueCard;

