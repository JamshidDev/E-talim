import React, { useState, useEffect } from 'react';
import axios from "axios";
import singupstyle from "../css/Singup.module.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import LockIcon from '@material-ui/icons/Lock';
import { Link } from "react-router-dom";

function Singup() {
    const [RandomNumberOne, setRandomNumberOne] = useState(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
    const [RandomNumberTwo, setRandomNumberTwo] = useState(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
    const [TelNumber, setTelNumber] = useState("");
    const [Password, setPassword] = useState("");
    const [RePassword, setRePassword] = useState("");
    const [Robot, setRobot] = useState(0);
    let errorMsg =[];


    const formValidation = () => {
        if (!isNaN(+TelNumber)) {
            console.log("Number a");
            return true
        }
        else {
            errorMsg.push("Telefon raqamingiz noto'g'ri...");
            console.log(errorMsg);
            return false
        }
    }

    let submitData = e => {
        e.preventDefault();
        const isValid = formValidation();
        let body = { Tell: TelNumber, pass: Password };
        let isRobot = RandomNumberOne + RandomNumberTwo === +Robot;
        let isPassTrue =Password===RePassword;
        if (isRobot && isValid && isPassTrue) {
            console.log(body);
            axios.post("https://jsonplaceholder.typicode.com/posts", body)
                .then((res) =>console.log(res))
                .catch((err) =>console.log(err));
        }
        else {console.log("Iltimos formani to'g'ri to'ldiring");}
    }



    return (
        <>
            <div className={singupstyle.Login_container}>
                <div className={singupstyle.login_box_center}>

                    <div className={singupstyle.login_form}>
                        {/* <h3 className={singupstyle.ws_mobile_logo}>E-TALIM</h3> */}
                        <h3 className={singupstyle.log_title}>Ro'yhatdan o'tish</h3>
                        <p className={singupstyle.log_info}>Hurmatli foydalanuvchi, tizimdan foydalanish uchun telefon raqamingizni kiriting</p>
                        {errorMsg && errorMsg.map((item)=>
                            <Link className={singupstyle.repassword} to="/repassword">item</Link>
                        )}

                        <div className={singupstyle.input_container, singupstyle.mobile_version}>
                            <button className={singupstyle.mobile_btn_sing} >Ro'yhatdan o'tish</button>
                            <Link className={singupstyle.mobile_btn_log} to="/login">Kirish</Link>
                        </div>

                        <div className={singupstyle.input_container}>
                            <div className={singupstyle.input_label}>
                                <span>+998</span>
                            </div>
                            <div className={singupstyle.input_data}>
                                <input type="_tel" placeholder="Telefon" onChange={(e) => { setTelNumber(e.target.value) }}></input>
                            </div>
                        </div>

                        <div className={singupstyle.input_container}>
                            <div className={singupstyle.input_label}>
                                <LockIcon className={singupstyle.lock_icon} />
                            </div>
                            <div className={singupstyle.input_data}>
                                <input type="_password" placeholder="Parol" onChange={(e) => { setPassword(e.target.value) }}></input>
                            </div>
                        </div>

                        <div className={singupstyle.input_container}>
                            <div className={singupstyle.input_label}>
                                <LockIcon className={singupstyle.lock_icon} />
                            </div>
                            <div className={singupstyle.input_data}>
                                <input type="_password" placeholder="Qayta kiriting parolni" onChange={(e) => { setRePassword(e.target.value) }}></input>
                            </div>
                        </div>

                        <div className={singupstyle.input_container}>
                            <div className={singupstyle.input_label}>
                                <span>{RandomNumberOne} + {RandomNumberTwo}</span>
                            </div>
                            <div className={singupstyle.input_data}>
                                <input type="Number" placeholder="Natija" onChange={(e) => { setRobot(e.target.value) }}></input>
                            </div>
                        </div>

                        <button className={singupstyle.btn_login} onClick={submitData}>RO'YHATDAN O'TISH</button>
                        <div className={singupstyle.chamge_language}>
                            <img src={Uzbek} alt="uzbekistan" />
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