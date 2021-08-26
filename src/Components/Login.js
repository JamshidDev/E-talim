import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../css/Login.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import LockIcon from '@material-ui/icons/Lock';


function Login() {


    const [TelNumber, setTelNumber] = useState("");
    const [Password, setPassword] = useState("");
    const [Robot, setRobot] = useState(0);
    // const [TelNumberError, setTeNumberError] = useState({});
    // const [PasswordError, setPasswordError] = useState({});
    const [RandomNumberOne,setRandomNumberOne]=useState(Math.floor(Math.random() * (9 - 1 + 1)) +1);
    const [RandomNumberTwo,setRandomNumberTwo]=useState(Math.floor(Math.random() * (9 - 1 + 1)) +1);
    

     

    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts/1")
    //     .then((res)=>{console.log(res);})
    //     .catch((err)=>{console.log(err);})
    // },[])

    const formValidation = () => {
        if(!isNaN(+TelNumber)){
            console.log("Number a");
            return true
        }
        else{
            console.log("Not a Number");
            return false
        }

        console.log(TelNumber);
        console.log(Password);
        console.log(Robot);
    }



    let submitData = e=> {
        e.preventDefault();
        alert("Data send to server");
        const isValid = formValidation();
       let  body={Tell:TelNumber, pass:Password};
       let isRobot=RandomNumberOne+RandomNumberTwo===+Robot;
       if(isRobot){
        axios.post("https://jsonplaceholder.typicode.com/posts",body)
        .then((res)=>{console.log(res);})
        .catch((err)=>{console.log(err);}) 
           console.log("ok");
       }
       else{
           console.log("bad");
       }
       
    }


    return (
        <>
            <div className="Login-container">
                <div className="login-box-center">

                    <form className="login-form" onSubmit={submitData}>
                        <h3 className="ws-mobile-logo">E-TALIM</h3>
                        <h3 className="log-title">Tizimga Kirish</h3>
                        <p className="log-info">Hurmatli foydalanuvchi, tizimdan foydalanish uchun telefon raqamingizni kiriting</p>

                        <div className="input-container mobile-version">
                            <button className="mobile-btn-log">Kirish</button>
                            <button className="mobile-btn-sing" >Ro'yhatdan o'tish</button>
                        </div>

                        <div className="input-container">
                            <div className="input-label">
                                <span>+998</span>
                            </div>
                            <div className="input-data">
                                <input type="tel" value={TelNumber} placeholder="Telefon" onChange={(e)=>{setTelNumber(e.target.value)}} ></input>
                            </div>
                        </div>

                        <div className="input-container">
                            <div className="input-label">
                                <LockIcon className="lock-icon" />
                            </div>
                            <div className="input-data">
                                <input type="password" value={Password} placeholder="Parol" onChange={(e)=>{setPassword(e.target.value)}}></input>
                            </div>
                        </div>

                        <div className="input-container">
                            <div className="input-label">
                                <span>{RandomNumberOne+" + "+RandomNumberTwo}</span>
                            </div>
                            <div className="input-data">
                                <input type="text" placeholder="Natija" onChange={(e) => { setRobot(e.target.value) }}></input>
                            </div>
                        </div>

                        <button className="btn-login" type="submit">KIRISH</button>
                        <p className="repassword" >Parolni tiklash</p>
                        <div className="chamge-language">
                            <img src={Uzbek} alt="Uzbek flags" />
                            <img src={English} alt="British flags" />
                        </div>



                    </form>

                    <div className="login-sign-up">
                        <h3 className="ws-logo">E-TALIM</h3>
                        <p className="ws-info">Bu tizim orqali siz o'z bilim darajangizni va
                            tendoshlaringiz bilimin tekshirib ko'rishga imkon
                            beradi.
                        </p>
                        <button className="btn-singup">Ro'yhatdan o'tish</button>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;