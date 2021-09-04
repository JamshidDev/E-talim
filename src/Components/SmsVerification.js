import React from 'react';
import smsVerification from "../css/SmsVerification.module.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import EmailIcon from '@material-ui/icons/Email';

function SmsVerification(){
    return(
        <>
             <div className={smsVerification.Login_container}>
                <div className={smsVerification.login_box_center}>

                    <div className={smsVerification.login_form}>
                        <h3 className={smsVerification.ws_mobile_logo}>E-TALIM</h3>
                        <h3 className={smsVerification.log_title}>4:59</h3>
                        <p className={smsVerification.log_info}>Ro'yhatdan o'tish uchun ***6004 raqamiga SMS xabar yuborildi. Ushbu kodni kiriting.</p>

                        <div className={smsVerification.input_container}>
                            <div className={smsVerification.input_label}>
                                    <EmailIcon className={smsVerification.sms_icon} />                   
                            </div>
                            <div className={smsVerification.input_data}>
                                <input type="tel" placeholder="SMS kodni kiriting"></input>
                            </div>
                        </div>
                        <button className={smsVerification.btn_login}>Tasdiqlash</button>
                        <div className={smsVerification.chamge_language}>
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