import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router";
import { TextField, MenuItem, Button, makeStyles } from '@material-ui/core';
import categories from "./Data/Category";
import  ErrorMessage from "./ErrorMessage";
import quizStyle from "../css/Quiz.module.css";
import styles from '../css/quizmodule.css';
import {useDispatch, useSelector} from "react-redux";
import {listTest} from "../actions/testAction";

const useStyle = makeStyles({

 input:{
  width:300,
  fontSize:60,
 },
})

function Quiz({ name, setName, fetchQuestions }){

const dispatch = useDispatch();
const testList = useSelector((state) => state.testList)
const {tests, loading, error } = testList;
let quiz = tests? tests.map((item)=>item._id):"xatolik";
console.log(quiz);
console.log(loading);
console.log(error);
const handlerClick =()=>{
  dispatch(listTest())
}
// useEffect(() => {
 
  
// }, [dispatch])










  const classes = useStyle()

 const [category, setCategory]=useState("");
 const [difficult, setDifficult]=useState("");
//  const [error, setError]=useState(false);

 const history = useHistory();

 const handleSubmit=()=>{
  if(!category || !difficult || !name){
    // setError(true)
    return;
  }
  else{
    // setError(false)
    console.log(category, difficult);
    fetchQuestions(category, difficult);
    history.push("/result");
  }



 }





    return(
        <>
        <div className={quizStyle.quiz_container}>
          <nav className={quizStyle.top_navbar}>
            <span className={quizStyle.logo_name}>
              E-talim
            </span>
          </nav>
          <button onClick={handlerClick}>Click me</button>
          <h1>Quiz settings</h1>
          <div className={quizStyle.grid_container}>
            <div className={quizStyle.grid_item1}>

            <TextField
            className={classes.input}
         style={{marginBottom:25}}
         id="outlined-basic" 
         label="Ismingiz"
          variant="outlined" 
          onChange={((e)=>setName(e.target.value))}
          value={name}
          />

           <TextField
           select
           style={{marginBottom:25, width:300}}
           id="outlined-basic" 
           label="Categoriyani tanlang"
           variant="outlined"
           onChange={((e)=>setCategory(e.target.value))}
          
           >
             {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.category}
            </MenuItem>
          ))}
            </TextField>

            <TextField
           select
           style={{marginBottom:25, width:300}}
           id="outlined-basic" 
           label="Qiyinlik darajasi"
           variant="outlined"
           onChange={((e)=>setDifficult(e.target.value))}
           value={difficult}
           >
            
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
            </TextField>

            <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}>
              Boshlash
            </Button>



            </div>
            <div className={quizStyle.grid_item1}>
            <Button>Default</Button>
      <Button className={styles.button}>Customized</Button>
           </div>

          </div>
        <h1>Quiz settings</h1>
        <div className={quizStyle.quiz_setting}>
          {/* {error && <ErrorMessage> xato</ErrorMessage>} */}
       
           </div>

           </div>
              </>
        
    )
}
export default Quiz;