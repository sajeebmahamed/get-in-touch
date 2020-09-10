import React from 'react';
import { Col, Card, Button, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Allusers = (props) => {

    const btnStyle = {
        border: '1px solid gray',
        background: 'none',
        color: '#000',
        padding: '0.4rem 3rem',
        margin: '0.4rem 0rem'
    }
    return (
        <Container>

            <Col>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={props.user.urls.small} />
                    <Card.Body>
                        <Card.Title> Name:  {props.user.user.name} </Card.Title>
                        <Card.Text>
                            Bio : {props.user.user.bio !== null ? props.user.user.bio : `Bio Not Available`}
                        </Card.Text>
                        <Button onClick={() => props.handleInstagram(props.user)} style={btnStyle}>
                            <FontAwesomeIcon icon={faInstagram} size="lg" />  {props.user.user.instagram_username ? props.user.user.instagram_username : 'Not Available'} +
                        </Button>
                        <Button onClick={() => props.handleTwitter(props.user)} style={btnStyle}>
                            <FontAwesomeIcon icon={faTwitter} size="lg" />  {props.user.user.instagram_username ? props.user.user.instagram_username : 'Not Available'} +
                        </Button>

                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
};

export default Allusers;