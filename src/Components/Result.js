import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "./Question";

function Result({ name, questions, score, setScore, setQuestions }){
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    
  useEffect(() => {
   
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
    
  }, [currQues, questions]);
  console.log(options)
 

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };


    return(
        <>
        <span>Welcome to {name}</span>
        <span>score: {score}</span>
        {questions?(
             <Question
             currQues={currQues}
             setCurrQues={setCurrQues}
             questions={questions}
             options={options}
             correct={questions[currQues]?.correct_answer}
             score={score}
             setScore={setScore}
             setQuestions={setQuestions}
           />
        ) : (
            <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
        )
        }
       
       
        </>
    )
}
export default Result;