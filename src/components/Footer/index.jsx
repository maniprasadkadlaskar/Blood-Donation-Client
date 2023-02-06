import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import { Instagram , Twitter , Linkedin , Facebook } from 'react-bootstrap-icons'

// footer of page 
const PageFooter = () => {
    return (
        <footer className="bg-custom-dark text-custom-grey p-4">
            <Container fluid>
                <Row md="3">
                <Col className="p-4">
                    <Row className="fs-4 text-white">
                        <div>Blood Donation</div>
                    </Row>
                    <Row>
                        <div>Blood Donation is web application for blood donors. This application help to donate their blood to blood banks through this interface.</div>
                    </Row>
                </Col>

                <Col className="p-4">
                    <Row className="fs-4 text-white">
                        <div>Links</div>
                    </Row>
                    <Row>
                        <div><Link to="/">Home</Link></div>
                    </Row>
                    <Row>
                        <div><Link to="/register">Register</Link></div>
                    </Row>
                    <Row>
                        <div><Link to="/donate">Donate</Link></div>
                    </Row>
                    <Row>
                        <div><Link to="/login">Login</Link></div>
                    </Row>
                </Col>

                <Col className="p-4">
                    <Row className="fs-4 text-white">
                        <div>Contact</div>
                    </Row>
                    <Row className='fs-5 md-4'>
                       <Col><a href='/'><Instagram/></a></Col>
                        <Col><a href='/'><Twitter/></a></Col>
                        <Col><a href='/'><Linkedin/></a></Col>
                        <Col><a href='/'><Facebook/></a></Col>
                    </Row>
                </Col>

                </Row>

                <Row className="p-3 text-center">
                    <div>Copyright &copy; 2023 Blood Donation - All Rights Reserved</div>
                </Row>
            </Container>
        </footer>
    );
}

export default PageFooter;