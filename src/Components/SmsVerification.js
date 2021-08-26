import React from 'react';
import "../css/SmsVerification.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import EmailIcon from '@material-ui/icons/Email';

function SmsVerification(){
    return(
        <>
             <div className="Login-container">
                <div className="login-box-center">

                    <div className="login-form">
                        <h3 className="ws-mobile-logo">E-TALIM</h3>
                        <h3 className="log-title">4:59</h3>
                        <p className="log-info">Ro'yhatdan o'tish uchun ***6004 raqamiga SMS xabar yuborildi. Ushbu kodni kiriting.</p>

                        <div className="input-container">
                            <div className="input-label">
                                    <EmailIcon className="sms-icon" />                   
                            </div>
                            <div className="input-data">
                                <input type="tel" placeholder="SMS kodni kiriting"></input>
                            </div>
                        </div>
                        <button className="btn-login">Tasdiqlash</button>
                        <div className="chamge-language">
                            <img src={Uzbek} />
                            <img src={English} />
                        </div>



                    </div> 

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
export default SmsVerification;