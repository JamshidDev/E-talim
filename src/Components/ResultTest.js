import { func } from "prop-types";
import React from "react";
import Result from "./Result";

function ResultTest({name, score}){

    return(
        <>
        <p>This is Result test component</p>
        Name: {name}
        Score: {score}

        </>
    )
}

export default ResultTest;