import React, { useState, useEffect } from 'react';
import axios from "axios";
import smsVerification from "../css/SmsVerification.module.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import EmailIcon from '@material-ui/icons/Email';
import {useHistory } from "react-router-dom";

function SmsVerification(){

    const history = useHistory();
    const [smsCode, setsmsCode] = useState("");
    const [Robot, setRobot] = useState(0);
    const [errorMsg, setErrorMsg] = useState(false);
    const [serverErr, setServerErr] = useState(true);

    return(
        <>
             <div className={smsVerification.Login_container}>
                <div className={smsVerification.login_box_center}>

                    <div className={smsVerification.login_form}>
                        <h3 className={smsVerification.ws_mobile_logo}>E-TALIM</h3>
                        <h3 className={smsVerification.log_title}>4:59</h3>
                        <p className={smsVerification.log_info}>Ro'yhatdan o'tish uchun ***6004 raqamiga SMS xabar yuborildi. Ushbu kodni kiriting.</p>
                        {errorMsg && <p className={smsVerification.repassword}>Malumotlarni to'liq kiriting</p>}
                        {serverErr && <p className={smsVerification.repassword}>Telefon raqam noto'g'ri... </p>}
                        <div className={smsVerification.input_container}>
                            <div className={smsVerification.input_label}>
                                    <EmailIcon className={smsVerification.sms_icon} />                   
                            </div>
                            <div className={smsVerification.input_data}>
                                <input type="tel" placeholder="SMS kodni kiriting" onChange={(e)=>{}}></input>
                            </div>
                        </div>
                        <button className={smsVerification.btn_login}>Tasdiqlash</button>
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
                                <button className={smsVerification.btn_singup}>Ro'yhatdan o'tish</button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default SmsVerification;