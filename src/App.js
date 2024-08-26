import './App.css';
import { a5Answers } from './data/a5';
import { useState, useEffect } from 'react';
import Card from './Card';

function App() {
  const [a5, setA5] = useState(a5Answers);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [attempted, setAttempted] = useState(1);
  const [percentage, setPercentage] = useState(0);


  useEffect(() => {
    setTotal(a5.length);
  }, [])

  const onClick = e => {
    const { name } = e.target;
    e.preventDefault();
    if (name === 'submit') {
      if (answer === a5[question].answer.ans) {
        setScore(score + 1);
      }
      setShowAns(true);
      if (!disableSubmit) setDisableSubmit(true);
    } else if (name === 'next') {
      setDisableSubmit(false);
      setShowAns(!showAns);
      setAnswer('')
      setQuestion(question + 1);
      setAttempted(attempted + 1);
      setPercentage(Math.round((score/attempted) * 100));
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <h1>ASE A5 Pracice Test</h1>
      <div className='counter'>
        <p>{`${score}/${attempted} ${percentage}%`}</p>
        <p>{`Total Questions: ${total}`}</p>
      </div>
      <Card data={a5[question]} key={a5[question].id} setAnswer={setAnswer} setQuestion={setQuestion} showAns={showAns} />
      <div className='btns'>
        <input className='btn' type='submit' name='submit' onClick={onClick} disabled={disableSubmit && answer !== ''} />
        <input className='btn' type='button' name='next' onClick={onClick} disabled={!disableSubmit} value='Next' />
      </div>
      <div className='answer-container' hidden={!showAns}>
        <p
          className={answer === a5[question].answer.ans
            ? "ans-valid"
            : "ans-wrong"}>
          {answer === a5[question].answer.ans ? "Correct" : "Incorrect"}
        </p>
        <p>Answer:</p>
        <h3>{a5[question].answer.ans}</h3>
        <p>{a5[question].answer.description}</p>
      </div>
    </div>
  );
}

export default App;
