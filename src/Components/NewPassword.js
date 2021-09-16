import React from 'react';
import NewPasswordStyle from "../css/NewPassword.module.css";
import Uzbek from "../imgs/uz.svg";
import English from "../imgs/eng.svg";
import LockIcon from '@material-ui/icons/Lock';


function NewPassword(){
  



    return(
        <>
        <div className={NewPasswordStyle.Login_container}>
            <div className={NewPasswordStyle.login_box_center}>

                <div className={NewPasswordStyle.login_form}>
                    <h3 className={NewPasswordStyle.ws_mobile_logo}>E-TALIM</h3>
                    <h3 className={NewPasswordStyle.log_title}>Yangi parol kiritish</h3>
                    <p className={NewPasswordStyle.log_info}>Parol uzunligi 8 ta belgidan kam bo'lmasligi kerak</p>

                    <div className={NewPasswordStyle.input_container}>
                        <div className={NewPasswordStyle.input_label}>
                            <LockIcon className={NewPasswordStyle.lock_icon} />
                        </div>
                        <div className={NewPasswordStyle.input_data}>
                            <input type="password" placeholder="Parol"></input>
                        </div>
                    </div>
                    <div className={NewPasswordStyle.input_container}>
                        <div className={NewPasswordStyle.input_label}>
                        <LockIcon className={NewPasswordStyle.lock_icon} />
                        </div>
                        <div className={NewPasswordStyle.input_data}>
                            <input type="password" placeholder="Qayta kiriting parolni"></input>
                        </div>
                    </div>

                   

                    <button className={NewPasswordStyle.btn_login}>Saqlash</button>
                    <div className={NewPasswordStyle.chamge_language}>
                        <img src={Uzbek} alt="not fount flag of uzb"/>
                        <img src={English} alt="not fount flag of eng"/>
                    </div>



                </div> 

                <div className={NewPasswordStyle.login_sign_up}>
                            <h3 className={NewPasswordStyle.ws_logo}>E-TALIM</h3>
                            <p className={NewPasswordStyle.ws_info}>Bu tizim orqali siz o'z bilim darajangizni va 
                                tendoshlaringiz bilimin tekshirib ko'rishga imkon
                             beradi.
                            </p>
                            <button className={NewPasswordStyle.btn_singup}>Ro'yhatdan o'tish</button>

                </div>
            </div>
        </div>

    </>
    )
}
export default NewPassword;