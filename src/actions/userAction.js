import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from "../constans/userConstans";
import axios from "axios";

export const login= (tell, pass)=>async(dispatch)=>{
    try{
        dispatch({type:USER_LOGIN_REQUEST});
        const config = {
            header:{
                "Content-type":"application/json",
            },
        };

        const {data}= await axios.post(
            "http://localhost:5000/api/users/login",
            {tell,pass},
            config
        );
        dispatch({type:USER_LOGIN_SUCCESS, payload:data});

        localStorage.setItem("userInfo", JSON.stringify(data));
         
    }
    catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            :error.message,
        });
    }
}

export const logout =()=>async(dispatch)=>{
    localStorage.removeItem("userInfo");
    dispatch({type:USER_LOGOUT});
}


export const register= (name, tell, pass)=>async(dispatch)=>{
    try{
        dispatch({type:USER_REGISTER_REQUEST});
        const config = {
            header:{
                "Content-type":"application/json",
            },
        };

        const {data}= await axios.post(
            "http://localhost:5000/api/users",
            {tell,pass, name},
            config
        );

        dispatch({type:USER_REGISTER_SUCCESS, payload:data});
        dispatch({type:USER_LOGIN_SUCCESS, payload:data});

        localStorage.setItem("userInfo", JSON.stringify(data));
         
    }
    catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            :error.message,
        });
    }
}
