import React from 'react';
import {useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { logout } from '../../actions/userAction';


export default function Profile() {
    const history = useHistory();
    const dispatch =useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} =userLogin;

    const logoutHandler= ()=>{
        dispatch(logout());
        history.push("/");
    }


    return (
        <div>
            <h1>This is Profile component</h1>
            <button onClick={()=>{
                localStorage.removeItem("userInfo");
                history.push("/")
            }}>Log out</button>
        </div>
    )
}
