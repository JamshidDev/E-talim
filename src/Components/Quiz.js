import React, { useState } from 'react';
import { useHistory } from "react-router";
import { TextField, MenuItem, Button } from '@material-ui/core';
import categories from "./Data/Category";
import  ErrorMessage from "./ErrorMessage";
import "../css/Quiz.css";

function Quiz({ name, setName, fetchQuestions }){

 const [category, setCategory]=useState("");
 const [difficult, setDifficult]=useState("");
 const [error, setError]=useState(false);

 const history = useHistory();

 const handleSubmit=()=>{
  if(!category || !difficult || !name){
    setError(true)
    return;
  }
  else{
    setError(false)
    console.log(category, difficult);
    fetchQuestions(category, difficult);
    history.push("/result");
  }
 }





    return(
        <>
        <div className="_quiz-container">
          <nav className="_top-navbar">
            <span className="_logo-name">
              E-talim
            </span>
          </nav>
          <h1>Quiz settings</h1>
          <div className="_grid-container">
            <div className="_grid-item1">

            <TextField
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
            onClick={handleSubmit}
            >
              Boshlash
            </Button>



            </div>
            <div className="_grid-item1">
              
              </div>

          </div>
        <h1>Quiz settings</h1>
        <div className="quiz-setting">
          {error && <ErrorMessage> xato</ErrorMessage>}
       
           </div>

           </div>
              </>
        
    )
}
export default Quiz;