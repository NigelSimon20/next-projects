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
        className={`${buttonClassName} rounded-2xl px-4 py-1 mb-2 mr-6`}
        disabled={showResult}
      >
        {decode(answer)}
      </button>
    );
  });

  return (
    <div className="question-container mx-[20px] md:mx-[100px] mb-6 border-b mt-10 pb-[15px]">
      <h1 className="question text-[#293264] mb-[20px] font-bold text-[18px]">{decode(question)}</h1>
      <div className="answers-btn-container">{answersElements}</div>
    </div>
  );
};

export default SingleQuestion;
