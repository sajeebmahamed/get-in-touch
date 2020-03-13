import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Adduser = (props) => {
    const addUser = props.addUser;
    console.log(addUser);
    const total = addUser.reduce((total, user) => total + user.salary, 0);
    return (
        // <div>
        //     <h2>Added User : {addUser.length}</h2>
        //     <h4>Total Salary : {total} </h4>
        // </div>
        <div>
            <Card className="main-card" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text className="card-text">
                        <p>Total Added User : {addUser.length}</p>
                        <p>Total Salary : {total}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Adduser;