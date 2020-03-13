import React, { useState } from 'react';
import json from '../../json/jsonlist.json';
import './Mainuser.css';
import Userinfo from '../Userinfo/Userinfo';
import Adduser from '../Adduser/Adduser';
const Mainuser = () => {
    const totalUsers = json.slice(0,15);
    const [users, setUsers] = useState(totalUsers);
    const [addUser, setAdduser] =  useState([]);
    
    const adduserBtn = (user) => {
        // console.log('User Added', user);
        const newUser = [...addUser, user];
        setAdduser(newUser);
    }
    
    return (
        <div className= "user-container">
            <div className="main-user">
                <ul>
                    {
                        users.map(user => <Userinfo
                            adduserBtn={adduserBtn}
                             user = {user}>{user.first_name} {user.last_name}
                            </Userinfo>)
                    }
                </ul>
            </div>
            <div>
                <Adduser addUser={addUser}></Adduser>
            </div>
        </div>
    );
};

export default Mainuser;