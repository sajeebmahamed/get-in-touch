import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const FrontPage = (props) => {
  
    const key = 'Y63I9SgAE3BXKL-MZwxCAkxQuWi3uQY34ghklkhSPJA'
    const api = 'https://api.unsplash.com/search/photos?per_page=25'

    const [users, setUsers] = useState([])
    console.log(users);
    useEffect(() => {
        fetch(`${api}&query=actress?&client_id=${key}`)
        .then(res => res.json())
        .then(data => {
            const mainUser = data.results
            setUsers(mainUser)
    
        })
    }, [])

    const btnStyle = {
        border: '1px solid gray',
        background: 'none',
        color: '#000',
        padding: '0.4rem 3rem',
        margin: '0.4rem 0rem'
    }

    return (
        <Container>
            <Row>
            
                {
                    users.map( (user, i) =>
                        (
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={user.urls.small} />
                                <Card.Body>
                                    <Card.Title> {user.user.name} </Card.Title>
                                    <Card.Text>
                                            {user.user.bio !== null ? user.user.bio : `Bio Not Available`}
                                    </Card.Text>
                                        <Button onClick={() => props.handleInstagram(user)} style={btnStyle}>
                                            <FontAwesomeIcon icon={faInstagram} size="lg" />  {user.user.instagram_username ? user.user.instagram_username : 'Not Available'} +
                                        </Button>
                                        <Button onClick={() => props.handleTwitter(user)} style={btnStyle}>
                                            <FontAwesomeIcon icon={faTwitter} size="lg" />  {user.user.instagram_username ? user.user.instagram_username : 'Not Available'} +
                                        </Button>
                                        
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
                
                
            </Row>
        </Container>
    );
};

export default FrontPage;