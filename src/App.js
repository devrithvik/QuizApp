import './App.css';
import {useState} from 'react';
function App() {
    const [result,setResult] = useState(false);
    const [score,setScore] = useState(0);
    const [curQuestion,setQuestion] = useState(0);
     
    const questions=[
      {question: "question 1",
       options: [
                  {option:"opt1",isCorrect:false},
                  {option:"opt2",isCorrect:false},
                  {option:"opt3",isCorrect:true},
                  {option:"opt4",isCorrect:false}
                ]
      },
      {question: "question 2",
       options: [
                  {option:"opt1",isCorrect:false},
                  {option:"opt2",isCorrect:false},
                  {option:"opt3",isCorrect:true},
                  {option:"opt4",isCorrect:false}
                ]
      },
      {question: "question 3",
       options: [
                  {option:"opt1",isCorrect:false},
                  {option:"opt2",isCorrect:false},
                  {option:"opt3",isCorrect:true},
                  {option:"opt4",isCorrect:false}
                ]
      },
      {question: "question 4",
       options: [
                  {option:"opt1",isCorrect:false},
                  {option:"opt2",isCorrect:false},
                  {option:"opt3",isCorrect:true},
                  {option:"opt4",isCorrect:false}
                ]
      },
      {question: "question 5",
       options: [
                  {option:"2opt1",isCorrect:false},
                  {option:"2opt2",isCorrect:true},
                  {option:"2opt3",isCorrect:false},
                  {option:"2opt4",isCorrect:false}
                ]
      }
    ]
    const updateScore = (isCorrect) => {
        if(isCorrect){
          setScore(score => score+1);
        }
        if(curQuestion + 1 < questions.length){
          setQuestion(curQuestion => curQuestion + 1);
        }
        else{
          setResult(true);
        }
    }
    const restart = () => {
      setResult(false);
      setScore(0);
      setQuestion(0);
    }
  return (
    <div className='app'>
    {/*  header */}
    <h1>QUIZ GAME</h1>
    {/* gamecard */}
    <div className='gamecard'>
      {
        result ?
          <div className='result'>
          {/* results */}
          <h2>your score is: {score} | you are upto: {(score/questions.length)*100}% </h2>
          <button className='restart' onClick={restart}>RESTART</button>
          </div>
              : 
          <div className='game'>
          {/* game */}
          <h2 className='question'>question {curQuestion + 1} of {questions.length}</h2>
          <ul className='unordered'>
              {
              questions[curQuestion].options.map((opt) => 
              {
                return(
                  <li><button className='option' onClick={e => updateScore(opt.isCorrect)}> {opt.option} </button></li>
                );
              }
            )}
          </ul>
          </div>
      }
    </div>
    </div>

  );
}

export default App;
