import React, { useState, useEffect } from 'react';
import axios from "axios";
import RepasswordStyle from "../css/Repassword.module.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import { Link, useHistory } from "react-router-dom";

function Repassword() {

    const history = useHistory();
    const [TelNumber, setTelNumber] = useState("");
    const [Robot, setRobot] = useState(0);
    const [errorMsg, setErrorMsg] = useState(false);
    const [serverErr, setServerErr] = useState(false);

    const [RandomNumberOne, setRandomNumberOne] = useState(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
    const [RandomNumberTwo, setRandomNumberTwo] = useState(Math.floor(Math.random() * (9 - 1 + 1)) + 1);


    const formValidation = () => {
        if (!isNaN(+TelNumber) && TelNumber.length) {
            return true
        }
        else { setErrorMsg(true); return false }
    }

    let submitData = e => {
        e.preventDefault();
        const isValid = formValidation();

        let body = { Tell: TelNumber };
        let isRobot = RandomNumberOne + RandomNumberTwo === +Robot;
        if (isRobot && isValid) {
            setErrorMsg(false)
            axios.post("https://jsonplaceholder.typicode.com/posts", body)
                .then((res) => { console.log(res); })
                .catch((err) => { console.log(err); setServerErr(true) })
            history.push("/smsverification")
        }
        else { setErrorMsg(true) }
    }


    return (
        <>
            <div className={RepasswordStyle.Login_container}>
                <div className={RepasswordStyle.login_box_center}>

                    <div className={RepasswordStyle.login_form}>
                        <h3 className={RepasswordStyle.ws_mobile_logo}>E-TALIM</h3>
                        <h3 className={RepasswordStyle.log_title}>Parolni tiklash</h3>
                        <p className={RepasswordStyle.log_info}>Hurmatli foydalanuvchi, tizimdan foydalanish uchun telefon raqamingizni kiriting</p>
                        {errorMsg && <p className={RepasswordStyle.repassword}>Malumotlarni to'liq kiriting</p>}
                        {serverErr && <p className={RepasswordStyle.repassword}>Telefon raqam noto'g'ri... </p>}
                        <div className={RepasswordStyle.input_container}>
                            <div className={RepasswordStyle.input_label}>
                                <span>+998</span>
                            </div>
                            <div className={RepasswordStyle.input_data}>
                                <input type="tel" placeholder="Telefon" onChange={(e) => { setTelNumber(e.target.value) }} ></input>
                            </div>
                        </div>

                        <div className={RepasswordStyle.input_container}>
                            <div className={RepasswordStyle.input_label}>
                                <span>{RandomNumberOne} + {RandomNumberTwo}</span>
                            </div>
                            <div className={RepasswordStyle.input_data}>
                                <input type="text" placeholder="Natijani kiriting" onChange={(e) => { setRobot(e.target.value) }}></input>
                            </div>
                        </div>

                        <div className={RepasswordStyle.input_container}>
                            <button className={RepasswordStyle.mobile_btn_log} onClick={submitData}>Parolni tiklash </button>
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