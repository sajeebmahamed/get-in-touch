import React from 'react';
import { Container, Row, Col, Nav, Navbar} from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import Allusers from '../AllUsers/Allusers';

const FrontPage = (props) => {
    const key = 'Y63I9SgAE3BXKL-MZwxCAkxQuWi3uQY34ghklkhSPJA'
    const api = 'https://api.unsplash.com/search/photos?per_page=25'

    const [users, setUsers] = useState([])

    const [instaCount, setInstaCount] = useState([])
    const [tweetCount, setTweetCount] = useState([])
    console.log(instaCount);
    useEffect(() => {
        async function Users() {
            const response = await fetch(`${api}&query=users?&client_id=${key}`)
            const data = await response.json()
            setUsers(data.results)
        }
        Users()
    }, [])

    const handleInstagram = (insta) => {
        const newInstaUser = [...instaCount, insta]
        setInstaCount(newInstaUser)
    }
    const handleTwitter = (tweet) => {
        const newTweetUser = [...tweetCount, tweet]
        setTweetCount(newTweetUser)
    }
    

    return (
        <Container>
            <Row>
                
                <Col md={8}>
                    {
                        users.map(user => <Allusers
                            user={user}
                            handleInstagram={handleInstagram}
                            handleTwitter={handleTwitter}
                        >

                        </Allusers>)
                    }
                </Col>
                <Col md={4}>
                    <h4> Instagram Added : {instaCount.length} </h4>
                    <hr />
                    <ul>
                        {
                            instaCount.map(insta => (

                                <li>
                                    <hr />
                                    <img src={insta.user.profile_image.small} alt="" />
                                    {insta.user.name}
                                    <hr />
                                </li>
                            ))
                        }
                    </ul>
                    <h4> Tweeter Added : {tweetCount.length} </h4>
                    <hr />
                    <ul>
                        {
                            tweetCount.map(tweet => (
                                <li>
                                    <hr />
                                    <img src={tweet.user.profile_image.small} alt="" />
                                    {tweet.user.name}
                                    <hr />
                                </li>
                            ))
                        }
                    </ul>


                </Col>
                
            </Row>
            
        </Container>
    );
};

export default FrontPage;