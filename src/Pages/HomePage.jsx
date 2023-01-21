import { Container, Row, Col } from 'reactstrap';
import EventCard from '../Components/Events/EventCard';

const HomePage = () => {
    return (
        <Container>
            <Row className='py-3'>
                <Col lg='6' className='pb-sm-4 pb-lg-0'>
                    <EventCard />
                </Col>
                <Col lg='6'>
                    <EventCard />
                </Col>
            </Row>
            <Row className='py-3'>
                <Col lg='6' className='pb-sm-4 pb-lg-0'>
                    <EventCard />
                </Col>
                <Col lg='6'>
                    <EventCard />
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;