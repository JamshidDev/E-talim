import React, { useState, useEffect } from 'react';
import axios from "axios";
import smsVerification from "../css/SmsVerification.module.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import EmailIcon from '@material-ui/icons/Email';
import {useHistory, Link } from "react-router-dom";

function SmsVerification(){


    const history = useHistory();
    const [smsCode, setsmsCode] = useState("");
    const [errorMsg, setErrorMsg] = useState(false);
    const [serverErr, setServerErr] = useState(false);
    const [minutes, setMinutes]=useState(0); 
    const [seconds, setSeconds]=useState(0);

    let time = new Date().getTime()+300000;
    useEffect(() => {
       
        const interval = setInterval(() => {
            
            let nowTime = new Date().getTime();
            let distance =time - nowTime;
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
            if(distance <0){
                clearInterval(interval)
                setMinutes(0);
                setSeconds(0);
            }
        }, 1000);
      }, []);
    let isVerify =()=>{
        console.log(smsCode.length===5);
        if(!isNaN(+smsCode) && smsCode.length===5) return true;
        else { setErrorMsg(true);setServerErr(false); return false}
    }
    const sendCode =(e)=>{
       let isSms = isVerify()
       let body ={smsCode}
        if(isSms){
            setErrorMsg(false);
            setServerErr(false);
            axios.post("https://jsonplaceholder.typicode.com/posts", body)
            .then((res) => { console.log(res); 
                history.push("/newpassword")
            })
            .catch((err) => { console.log(err); setServerErr(true);  history.push("/newpassword") })
        }
        else{

            console.log("Error occured...");
        }
        
    }

    return(
        <>
             <div className={smsVerification.Login_container}>
                <div className={smsVerification.login_box_center}>

                    <div className={smsVerification.login_form}>
                        {/* <h3 className={smsVerification.ws_mobile_logo}>E-TALIM</h3> */}
                        <h3 className={smsVerification.log_title}>{minutes}:{seconds}</h3>
                        <p className={smsVerification.log_info}>Ro'yhatdan o'tish uchun ***6004 raqamiga SMS xabar yuborildi. Ushbu kodni kiriting.</p>
                        {errorMsg && <p className={smsVerification.repassword}>Sms ko'dingizni to'g'riligini tekshiring...</p>}
                        {serverErr && <p className={smsVerification.repassword}>Noto'g'ri sms kod... </p>}
                        <div className={smsVerification.input_container}>
                            <div className={smsVerification.input_label}>
                                    <EmailIcon className={smsVerification.sms_icon} />                   
                            </div>
                            <div className={smsVerification.input_data}>
                                <input type="tel" placeholder="SMS kodni kiriting" onChange={(e)=>{setsmsCode(e.target.value)}}></input>
                            </div>
                        </div>
                        <button className={smsVerification.btn_login} onClick={sendCode}>Tasdiqlash</button>
                        <div className={smsVerification.chamge_language}>
                            <img src={Uzbek} alt="not fount flag of uzb" />
                            <img src={English} alt="not fount flag of eng"/>
                        </div>



                    </div> 

                    <div className={smsVerification.login_sign_up}>
                                <h3 className={smsVerification.ws_logo}>E-TALIM</h3>
                                <p className={smsVerification.ws_info}>Bu tizim orqali siz o'z bilim darajangizni va 
                                    tendoshlaringiz bilimin tekshirib ko'rishga imkon
                                 beradi.
                                </p>
                                <Link to="/singup" className={smsVerification.btn_singup}>Ro'yhatdan o'tish</Link>

                    </div>
                </div>
            </div>
        </>
    )
}
export default SmsVerification;