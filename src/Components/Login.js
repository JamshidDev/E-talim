import React from 'react';
import "../css/Login.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import LockIcon from '@material-ui/icons/Lock';


function Login() {
    return (
        <>
            <div className="Login-container">
                <div className="login-box-center">

                    <div className="login-form">
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
                                <input type="tel" placeholder="Telefon"></input>
                            </div>
                        </div>

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
                                <span>2 + 3</span>
                            </div>
                            <div className="input-data">
                                <input type="Number" placeholder="Natija"></input>
                            </div>
                        </div>

                        <button className="btn-login">KIRISH</button>
                        <p className="repassword" >Parolni tiklash</p>
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
export default Login;