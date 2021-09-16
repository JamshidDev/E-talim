import React, { useState, useEffect } from 'react';
import axios from "axios";
import classes from '../css/login.module.css';
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import LockIcon from '@material-ui/icons/Lock';
import { Link } from "react-router-dom";



function Login() {

    const [TelNumber, setTelNumber] = useState("");
    const [Password, setPassword] = useState("");
    const [Robot, setRobot] = useState(0);
    const [errorMsg, setErrorMsg] = useState(false);
    const [serverErr, setServerErr] = useState(false);
    const [RandomNumberOne, setRandomNumberOne] = useState(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
    const [RandomNumberTwo, setRandomNumberTwo] = useState(Math.floor(Math.random() * (9 - 1 + 1)) + 1);

    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts/1")
    //     .then((res)=>{console.log(res);})
    //     .catch((err)=>{console.log(err);})
    // },[])

    const formValidation = () => {
        if (!isNaN(+TelNumber) && TelNumber.length) {
            console.log("Number a");
            return true
        }
        else {
            setErrorMsg(true); return false
        }
    }



    let submitData = e => {
        e.preventDefault();
        const isValid = formValidation();

        let body = { Tell: TelNumber, pass: Password };
        let isPassHave = Boolean(Password.length);
        let isRobot = RandomNumberOne + RandomNumberTwo === +Robot;
        if (isRobot && isValid && isPassHave) {
            setErrorMsg(false)
            setErrorMsg(false)
            axios.post("https://jsonplaceholder.typicode.com/posts", body)
                .then((res) => { console.log(res); })
                .catch((err) => { console.log(err); setServerErr(true) })
            console.log("ok");
        }
        else {
            setErrorMsg(true); console.log("bad");
        }

    }
    return (
        <>
            <div className={classes.login_container}>
                <div className={classes.login_box_center}>

                    <form className={classes.login_form}>
                        {/* <h3 className={classes.ws_mobile_logo}>E-TALIM</h3> */}
                        <h3 className={classes.log_title}>Tizimga Kirish</h3>
                        <p className={classes.log_info}>Hurmatli foydalanuvchi, tizimdan foydalanish uchun telefon raqamingizni kiriting</p>

                        <div className={classes.input_container, classes.mobile_version}>
                            <button className={classes.mobile_btn_log}>Kirish</button>
                            <Link className={classes.mobile_btn_sing} to="/singup">Ro'yhatdan o'tish</Link>
                        </div>

                        {errorMsg && <p className={classes.repassword}>Malumotlarni to'liq kiriting</p>}
                        {serverErr && <p className={classes.repassword}>Parol yoki login noto'g'ri... </p>}
                        <div className={classes.input_container}>
                            <div className={classes.input_label}>
                                <span>+998</span>
                            </div>
                            <div className={classes.input_data}>
                                <input type="tel" value={TelNumber} placeholder="Telefon" onChange={(e) => { setTelNumber(e.target.value) }} ></input>
                            </div>
                        </div>

                        <div className={classes.input_container}>
                            <div className={classes.input_label}>
                                <LockIcon className={classes.lock_icon} />
                            </div>
                            <div className={classes.input_data}>
                                <input type="password" value={Password} placeholder="Parol" onChange={(e) => { setPassword(e.target.value) }}></input>
                            </div>
                        </div>

                        <div className={classes.input_container}>
                            <div className={classes.input_label}>
                                <span>{RandomNumberOne + " + " + RandomNumberTwo}</span>
                            </div>
                            <div className={classes.input_data}>
                                <input type="text" placeholder="Natija" onChange={(e) => { setRobot(e.target.value) }}></input>
                            </div>
                        </div>

                        <button className={classes.btn_login} onClick={submitData}>KIRISH</button>
                        <Link className={classes.repassword} to="/repassword">Parolni tiklash</Link>
                        <div className={classes.change_language}>
                            <img src={Uzbek} alt="Uzbek flags" />
                            <img src={English} alt="British flags" />
                        </div>



                    </form>

                    <div className={classes.login_sign_up}>
                        <h3 className={classes.ws_logo}>E-TALIM</h3>
                        <p className={classes.ws_info}>Bu tizim orqali siz o'z bilim darajangizni va
                            tendoshlaringiz bilimin tekshirib ko'rishga imkon
                            beradi.
                        </p>
                        <Link className={classes.btn_singup} to="/singup">Ro'yhatdan o'tish</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;