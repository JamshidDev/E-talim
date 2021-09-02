import React from "react";
import style from "../css/resultTest.module.css";


function ResultTest({name, score}){

    return(
        <>
        <p className={style.red_ok}>This is Result test component</p>
        Name: {name}
        Score: {score}

        </>
    )
}

export default ResultTest;