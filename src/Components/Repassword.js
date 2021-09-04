import React from 'react';
import RepasswordStyle from "../css/Repassword.module.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import {Link} from "react-router-dom";

function Repassword(){
    return(
        <>
             <div className={RepasswordStyle.Login_container}>
                <div className={RepasswordStyle.login_box_center}>

                    <div className={RepasswordStyle.login_form}>
                        <h3 className={RepasswordStyle.ws_mobile_logo}>E-TALIM</h3>
                        <h3 className={RepasswordStyle.log_title}>Parolni tiklash</h3>
                        <p className={RepasswordStyle.log_info}>Hurmatli foydalanuvchi, tizimdan foydalanish uchun telefon raqamingizni kiriting</p>
                        <div className={RepasswordStyle.input_container}>
                            <div className={RepasswordStyle.input_label}>
                                <span>+998</span>
                            </div>
                            <div className={RepasswordStyle.input_data}>
                                <input type="tel" placeholder="Telefon"></input>
                            </div>
                        </div>

                        <div className={RepasswordStyle.input_container}>
                            <div className={RepasswordStyle.input_label}>
                                <span>2 + 3</span>
                            </div>
                            <div className={RepasswordStyle.input_data}>
                                <input type="Number" placeholder="Natijani kiriting"></input>
                            </div>
                        </div>

                        <div className={RepasswordStyle.input_container}>
                           <button className={RepasswordStyle.mobile_btn_log}>Parolni tiklash </button>
                           <Link className={RepasswordStyle.mobile_btn_sing} to="/login">Kirish</Link>
                        </div>

                        
                        <div className={RepasswordStyle.chamge_language}>
                            <img src={Uzbek} />
                            <img src={English} />
                        </div>



                    </div> 

                    <div className={RepasswordStyle.login_sign_up}>
                                <h3 className={RepasswordStyle.ws_logo}>E-TALIM</h3>
                                <p className={RepasswordStyle.ws_info}>Bu tizim orqali siz o'z bilim darajangizni va 
                                    tendoshlaringiz bilimin tekshirib ko'rishga imkon
                                 beradi.
                                </p>
                                <Link className={RepasswordStyle.btn_singup} to="/singup">Ro'yhatdan o'tish</Link>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Repassword;