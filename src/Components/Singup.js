import React from 'react';
import singupstyle from "../css/Singup.module.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import LockIcon from '@material-ui/icons/Lock';
import {Link} from "react-router-dom";

function Singup() {

    function getValue(val){
        console.log(val.target.name +" "+ val.target.value);
    }

    return (
        <>
            <div className={singupstyle.Login_container}>
                <div className={singupstyle.login_box_center}>

                    <div className={singupstyle.login_form}>
                        <h3 className={singupstyle.ws_mobile_logo}>E-TALIM</h3>
                        <h3 className={singupstyle.log_title}>Ro'yhatdan o'tish</h3>
                        <p className={singupstyle.log_info}>Hurmatli foydalanuvchi, tizimdan foydalanish uchun telefon raqamingizni kiriting</p>

                        <div className={singupstyle.input_container, singupstyle.mobile_version}>
                            <button className={singupstyle.mobile_btn_sing} >Ro'yhatdan o'tish</button>
                             <Link className={singupstyle.mobile_btn_log} to="/login">Kirish</Link>
                        </div>

                        <div className={singupstyle.input_container}>
                            <div className={singupstyle.input_label}>
                                <span>+998</span>
                            </div>
                            <div className={singupstyle.input_data}>
                                <input type="_tel" placeholder="Telefon" onChange={getValue}></input>
                            </div>
                        </div>

                        <div className={singupstyle.input_container}>
                            <div className={singupstyle.input_label}>
                                <LockIcon className={singupstyle.lock_icon} />
                            </div>
                            <div className={singupstyle.input_data}>
                                <input type="_password" placeholder="Parol"></input>
                            </div>
                        </div>

                        <div className={singupstyle.input_container}>
                            <div className={singupstyle.input_label}>
                                <LockIcon className={singupstyle.lock_icon} />
                            </div>
                            <div className={singupstyle.input_data}>
                                <input type="_password" placeholder="Qayta kiriting parolni"></input>
                            </div>
                        </div>

                        <div className={singupstyle.input_container}>
                            <div className={singupstyle.input_label}>
                                <span>2 + 3</span>
                            </div>
                            <div className={singupstyle.input_data}>
                                <input type="Number" placeholder="Natija"></input>
                            </div>
                        </div>

                        <button className={singupstyle.btn_login}>RO'YHATDAN O'TISH</button>
                        <div className={singupstyle.chamge_language}>
                            <img src={Uzbek}  alt="uzbekistan"/>
                            <img src={English} alt="English" />
                        </div>



                    </div>

                    <div className={singupstyle.login_sign_up}>
                        <h3 className={singupstyle.ws_logo}>E-TALIM</h3>
                        <p className={singupstyle.ws_info}>Bu tizim orqali siz o'z bilim darajangizni va
                            tendoshlaringiz bilimin tekshirib ko'rishga imkon
                            beradi.
                        </p>
                         <Link className={singupstyle.btn_singup} to="/login">Kirish</Link>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Singup;