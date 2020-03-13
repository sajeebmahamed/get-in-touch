import React from 'react';
import './Userinfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


const Userinfo = (props) => {
    // console.log(props);
    const { first_name, image, email, gender, salary } = props.user;
    return (
        <div className="userinfo">
            {/* <div className = "u-img">
                <img src={image} alt="" width="100px" height="100px" />
            </div> */}
            {/* <div className = "u-text">
                <h3>Name : {first_name}</h3>
                <h4>Email : {email}</h4>
                <h4>Gender : {gender}</h4>
                <h4>Salary : {salary}</h4>
                <button className = "btn btn-primary" onClick={() => props.adduserBtn(props.user)}> <FontAwesomeIcon icon={faPlus} />Add Users</button>

            </div> */}

            <Card className="main-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {image} />
                <Card.Body>
                    <Card.Title>{first_name}</Card.Title>
                    <Card.Text className = "card-text">
                        {/* <p>Name : {first_name}</p> */}
                        <p>Email : {email}</p>
                        <p>Gender : {gender}</p>
                        <p>Salary : {salary}</p>
                    </Card.Text>
                    <Button className="btn btn-primary" onClick={() => props.adduserBtn(props.user)}> <FontAwesomeIcon icon={faPlus} />Add Users</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Userinfo;