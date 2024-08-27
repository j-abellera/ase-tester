import React from 'react';
import './Card.css';

const Card = ({ data, showAns, setAnswer }) => {
    const { id, question, choices } = data;
    const image = data.image ? data.image : null;
    return (
        <div className='card-container'>
            {image !== null && <img className='q-image' src={image} alt={question} />}
            <h3 className='card-question'>{question}</h3>
            <div className='card-choice-container'>
                <div className='choices-list'>
                    {choices.map(choice => (
                        <div>
                            <input name={id} type='radio' value={choice.letter} disabled={showAns} onClick={() => setAnswer(choice.letter)} />
                            <label htmlFor={id}>{`${choice.letter}. ${choice.description}`}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card;