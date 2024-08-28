import './App.css';
import * as a5Data from './data/a5/a5';
import * as a1Data from './data/a1/a1';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate, Link, Routes, Route } from 'react-router-dom';
import Card from './Card';

function App() {
  const [testData, setTestData] = useState(a5Data);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [attempted, setAttempted] = useState(1);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setQuestion(0);
    setShowAns(false);
    setDisableSubmit(false);
    setScore(0);
    setTotal(testData.QA.length);
    setAttempted(1);
    setPercentage(0);
  }, [testData])

  // useEffect(() => {
  //   setTotal(testData.QA.length);
  // }, [])

  const navigate = useNavigate();

  const changeTest = e => {

    /* eslint-disable no-restricted-globals */
    const proceed = confirm('Are you sure you want to switch tests? All progress will be lost.');
    /* eslint-enable no-restricted-globals */

    if (proceed) {
      return e === 'a1'
        ? setTestData(a1Data)
        : e === 'a5'
          ? setTestData(a5Data)
          : null
    } else {
      return;
    }
  }

  const onClick = e => {
    const { name } = e.target;
    e.preventDefault();
    if (name === 'submit') {
      if (answer === testData.QA[question].answer.ans) {
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
      setPercentage(Math.round((score / attempted) * 100));
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <section className='test-links'>
        <div className='link' onClick={() => changeTest('a1')}>A1</div>
        <div className='link' onClick={() => changeTest('a5')}>A5</div>
      </section>
      <h1 className='test-title'>{testData.title}</h1>
      <div className='counter'>
        <p>{`${score}/${attempted} ${percentage}%`}</p>
        <p>{`Total Questions: ${total}`}</p>
      </div>
      <Card data={testData.QA[question]} key={testData.QA[question].id} setAnswer={setAnswer} setQuestion={setQuestion} showAns={showAns} />
      <div className='btns'>
        <input className='btn' type='submit' name='submit' onClick={onClick} disabled={disableSubmit && answer !== ''} />
        <input className='btn' type='button' name='next' onClick={onClick} disabled={!disableSubmit} value='Next' />
      </div>
      <div className='answer-container' hidden={!showAns}>
        <p
          className={answer === testData.QA[question].answer.ans
            ? "ans-valid"
            : "ans-wrong"}>
          {answer === testData.QA[question].answer.ans ? "Correct" : "Incorrect"}
        </p>
        <p>Answer:</p>
        <h3>{testData.QA[question].answer.ans}</h3>
        <p>{testData.QA[question].answer.description}</p>
      </div>
    </div>
  );
}

export default App;
