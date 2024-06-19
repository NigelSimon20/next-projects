'use client';

import React from 'react';
import { decode } from 'html-entities';

interface SingleQuestionProps {
  question: string;
  allAnswers: string[];
  selectedAnswer: string;
  correctAnswer: string;
  showResult: boolean;
  updateAnswer: (currentQuestion: string, answer: string) => void;
}

const SingleQuestion: React.FC<SingleQuestionProps> = ({
  question,
  allAnswers,
  selectedAnswer,
  correctAnswer,
  showResult,
  updateAnswer,
}) => {
  function clickAnswer(answer: string, currentQuestion: string) {
    updateAnswer(currentQuestion, answer);
  }

  const answersElements = allAnswers.map((answer, index) => {
    const isCorrect = answer === correctAnswer;
    const isSelected = answer === selectedAnswer;
    const isIncorrectSelected = isSelected && answer !== correctAnswer;

    let buttonClassName = 'answer-btn bg-gray-200 text-gray-800';
    if (isSelected) {
      buttonClassName = 'answer-btn bg-green-500 text-white';
    }
    if (showResult && isCorrect) {
      buttonClassName = 'answer-btn bg-green-500 text-white';
    }
    if (showResult && isIncorrectSelected) {
      buttonClassName = 'answer-btn bg-red-500 text-white';
    }

    return (
      <button
        key={index}
        onClick={() => clickAnswer(answer, question)}
        className={`${buttonClassName} rounded-lg px-4 py-2 mb-2`}
        disabled={showResult}
      >
        {decode(answer)}
      </button>
    );
  });

  return (
    <div className="question-container">
      <h1 className="question">{decode(question)}</h1>
      <div className="answers-btn-container">{answersElements}</div>
    </div>
  );
};

export default SingleQuestion;
