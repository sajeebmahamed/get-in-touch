import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const TopMenu = () => {
    return (
        <Container fluid style={{height:'60px'}}>
            <Container>
                <Row>
                    <Col>
                        <Navbar fixed="top" bg="light" expand="lg">
                            <Navbar.Brand href="#home">Get In Touch</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    {/* <Nav.Link href="#home">Linkdin Added : </Nav.Link>
                                    <Nav.Link href="#link">Twitter Added : </Nav.Link>   */}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar> 
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default TopMenu;