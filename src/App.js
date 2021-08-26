import React, { useState } from 'react';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Login from './Components/Login';
// import Repassword from "./Components/Repassword";
// import SmsVerification from './Components/SmsVerification';
// import NewPassword from './Components/NewPassword';
import Singup from './Components/Singup';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

function App() {

  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficult = "") => {
    console.log(category+difficult);
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficult}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <>
      <BrowserRouter>
        <Switch>

        <Route path="/quiz" exact>
          <Quiz 
           name ={name}
           setName={setName}
           fetchQuestions={fetchQuestions}
          />
        </Route>
        <Route path="/result" exact>
          <Result 
           name={name}
           questions={questions}
           score={score}
           setScore={setScore}
           setQuestions={setQuestions}
          />
        </Route>
        <Route path="/home" exact>
          <Login />
        </Route>
        <Route path="/singup" exact>
          <Singup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        </Switch>
       



      </BrowserRouter>

    </>

  );
}

export default App;
