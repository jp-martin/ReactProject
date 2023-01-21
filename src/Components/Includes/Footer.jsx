import { Col, Row, Container, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer jumbotron jumbotron-fluid mt-5">
            <Container>
                <Row className="align-items-end">
                    <Col>
                        <ul id="footerMenu" className="list-unstyled">
                            <li><NavItem><NavLink className="nav-link" to="/">Home</NavLink></NavItem></li>
                            <li><NavItem><NavLink className="nav-link" to="event">Events</NavLink></NavItem></li>
                            <li><NavItem><NavLink className="nav-link" to="about">About</NavLink></NavItem></li>
                        </ul>
                    </Col>
                    <Col className="text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                    </Col>
                    <Col className="text-right">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone fa-lg text-primary"></i> 1-800-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:booking@nucampevents.org"><i className="fa fa-envelope-o"></i> booking@nucampevents.org</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;