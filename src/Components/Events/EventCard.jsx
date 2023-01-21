import React from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  //npm install --save reactstrap @fortawesome/react-fontawesome

function EventCard() {
  return (
    <Card className="eventCard">
      <Row>
        <Col xs="3" className="pr-0">
          <CardHeader className="py-3 px-1 bg-primary text-center eventDateTimeLocation">
            <div className="eventDate">
              <span className="eventDateDays">22</span>Dec
            </div>
            <div className="eventTime">
              <FontAwesomeIcon icon="clock-o" size="sm" className="fa-sm" />
              10 - 11AM
            </div>
            <div className="eventLocation">
              <FontAwesomeIcon icon="map-marker" size="sm" className="fa-sm" />
              Central Branch
            </div>
          </CardHeader>
        </Col>
        <Col xs="9" className="pl-0">
          <CardHeader className="bg-info">
            <a href="event.html">Book Club</a>
          </CardHeader>
          <CardBody className="px-3 pt-3 pb-0">
            <h4>Harry Potter and the Half Blood Prince</h4>
            <span className="d-none d-sm-block">A cursed wizard discovers the truth behind the heir to dark wizards.</span>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default EventCard;
