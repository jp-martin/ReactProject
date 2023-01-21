import { Navbar, Col, Row, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.png';

const Header = () => {
    return (
        <header id="mainNav" className="jumbotron jumbotron-fluid">
            <Container>
                <Row>
                    <div>
                        <img src={Logo} className="img-fluid" alt="Logo" />
                    </div>
                    <Col id="headerCol" >
                        <h1>NuCamp Events</h1>
                        <h2>Planning with Bootstrap</h2>
                    </Col>
                    <Col id="navCol" className="col-12 col-lg-7 col-xl-6 d-inline-flex flex-row-reverse align-items-end">
                        <Navbar className="navbar navbar-expand sticky-top">
                            <ul className="navbar-nav">
                                <NavLink className='nav-link' to='/'>Home</NavLink>
                                <NavLink className='nav-link' to='event'>Event</NavLink>
                                <NavLink className='nav-link' to='about'>About</NavLink>
                            </ul>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;