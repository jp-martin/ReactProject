import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  //npm install --save reactstrap @fortawesome/react-fontawesome

function FeaturedEventCard() {
  return (
    <Card className="featuredEventCard">
      <CardHeader className="bg-info text-white">
        Movie Event 
        <span className="featuredEventIcon">
          <FontAwesomeIcon icon="film" size="sm" className="d-none d-lg-inline" />
        </span>
      </CardHeader>
      <CardBody className="p-3">
        <h4>Terminator</h4>
        <span className="d-none d-sm-block">A cybernetic organism sent back through time, is the Terminator!</span>
      </CardBody>
    </Card>
  );
}

export default FeaturedEventCard;