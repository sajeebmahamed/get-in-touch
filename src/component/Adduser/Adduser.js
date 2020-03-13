import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './Aduser.css'

const Adduser = (props) => {
    const addUser = props.addUser;
    // console.log(addUser);
    const total = addUser.reduce((total, user) => total + user.salary, 0);
    const userInfo = addUser.reduce((userInfo, user) => userInfo + user.name, 0);
    return (
        <div>
            <Card className="main-card" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text className="card-text">
                        <p>Total Added User : {addUser.length}</p>
                        <p>Total Salary : {total}</p>
                    </Card.Text>
                    <h4 className = "h44">Added User List</h4>
                    {
                        addUser.map(user => <ol> <img width = "50px" height = "50px" className="" src={user.image} alt="" /> <span>{user.first_name}</span>  </ol>)
                    }
                </Card.Body>
            </Card>
            
        </div>
        
    );
};

export default Adduser;