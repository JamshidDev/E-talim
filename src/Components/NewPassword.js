import React from 'react';
import "../css/NewPassword.module.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import LockIcon from '@material-ui/icons/Lock';


function NewPassword(){
    return(
        <>
        <div className="Login-container">
            <div className="login-box-center">

                <div className="login-form">
                    <h3 className="ws-mobile-logo">E-TALIM</h3>
                    <h3 className="log-title">Yangi parol kiritish</h3>
                    <p className="log-info">Parol uzunligi 8 ta belgidan kam bo'lmasligi kerak</p>

                    <div className="input-container">
                        <div className="input-label">
                            <LockIcon className="lock-icon" />
                        </div>
                        <div className="input-data">
                            <input type="password" placeholder="Parol"></input>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-label">
                            <LockIcon className="lock-icon" />
                        </div>
                        <div className="input-data">
                            <input type="password" placeholder="Qayta kiriting parolni"></input>
                        </div>
                    </div>

                   

                    <button className="btn-login">Saqlash</button>
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
export default NewPassword;