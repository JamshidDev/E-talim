import React from 'react';
import "../css/Singup.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import LockIcon from '@material-ui/icons/Lock';

function Singup() {

    function getValue(val){
        console.log(val.target.name +" "+ val.target.value);
    }

    return (
        <>
            <div className="Login-container">
                <div className="login-box-center">

                    <div className="login-form">
                        <h3 className="ws-mobile-logo">E-TALIM</h3>
                        <h3 className="log-title">Ro'yhatdan o'tish</h3>
                        <p className="log-info">Hurmatli foydalanuvchi, tizimdan foydalanish uchun telefon raqamingizni kiriting</p>

                        <div className="input-container mobile-version">
                            <button className="mobile-btn-sing" >Ro'yhatdan o'tish</button>
                            <button className="mobile-btn-log">Kirish</button>
                        </div>

                        <div className="input-container">
                            <div className="input-label">
                                <span>+998</span>
                            </div>
                            <div className="input-data">
                                <input type="tel" placeholder="Telefon" onChange={getValue}></input>
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
                                <LockIcon className="lock-icon" />
                            </div>
                            <div className="input-data">
                                <input type="password" placeholder="Qayta kiriting parolni"></input>
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

                        <button className="btn-login">RO'YHATDAN O'TISH</button>
                        <p className="repassword" >Parolni tiklash</p>
                        <div className="chamge-language">
                            <img src={Uzbek}  alt="uzbekistan"/>
                            <img src={English} alt="English" />
                        </div>



                    </div>

                    <div className="login-sign-up">
                        <h3 className="ws-logo">E-TALIM</h3>
                        <p className="ws-info">Bu tizim orqali siz o'z bilim darajangizni va
                            tendoshlaringiz bilimin tekshirib ko'rishga imkon
                            beradi.
                        </p>
                        <button className="btn-singup">Kirish</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Singup;