'use client';

import { FunctionComponent, useState, useEffect } from 'react';
import SingleQuestion from './SingleQuestion';

interface QuestionObject {
  question: string;
  shuffledAnswers: string[];
  correctAnswer: string;
  selectedAnswer: string;
}

interface Question{
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const Questions: FunctionComponent = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<QuestionObject[]>([]);
  const [showWarning, setShowWarning] = useState(false);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!questions || questions.length === 0) {
      fetch('https://opentdb.com/api.php?amount=5')
        .then(response => response.json())
        .then(data => {
          setQuestions(data.results);
          setQuestionsAndAnswers(
            data.results.map((questionObject: Question) => {
              return {
                question: questionObject.question,
                shuffledAnswers: shuffle([
                  ...questionObject.incorrect_answers,
                  questionObject.correct_answer
                ]),
                correctAnswer: questionObject.correct_answer,
                selectedAnswer: ''
              };
            })
          );
        })
        .catch(error => {
          console.error('Error fetching questions:', error);
        });
    }
  }, [questions]);
  

  function shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  }

  function updateAnswer(currentQuestion: string, answer: string) {
    setQuestionsAndAnswers(questionsAndAnswers.map(questionObject =>
      questionObject.question === currentQuestion
        ? { ...questionObject, selectedAnswer: answer }
        : questionObject
    ));
  }

  function checkAnswers() {
    const notAllAnswered = questionsAndAnswers.some(questionObject =>
      questionObject.selectedAnswer === ''
    );

    setShowWarning(notAllAnswered);

    if (!notAllAnswered) {
      questionsAndAnswers.forEach(questionObject => {
        if (questionObject.selectedAnswer === questionObject.correctAnswer) {
          setNumCorrectAnswers(prevNumCorrectAnswers => prevNumCorrectAnswers + 1);
        }
      });

      setShowResult(true);
    }
  }

  function playAgain() {
    setQuestions([]);
    setQuestionsAndAnswers([]);
    setShowResult(false);
    setNumCorrectAnswers(0);
  }

  const questionsElements = questionsAndAnswers.map((questionObject, index) => (
    <SingleQuestion
      key={index}
      question={questionObject.question}
      allAnswers={questionObject.shuffledAnswers}
      selectedAnswer={questionObject.selectedAnswer}
      correctAnswer={questionObject.correctAnswer}
      showResult={showResult}
      updateAnswer={updateAnswer}
    />
  ));

  return (
    <div>

      {questions?.length === 0 && (
        <p>Loading Questions, If it takes long check your internet connection</p>
      )}

      <div className="questions-container">{questionsElements}</div>

      <div className="text-center">
        {showWarning && (
          <p className="warning-message">
            There are questions not answered yet
          </p>
        )}

      {!showResult &&(
          <button
            className="check-btn bg-[#4D5B9E] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={checkAnswers}
            >
            Check answers
        </button>
      )
      }
        

      </div>

      {showResult && (
        <div className="result-container">
          <p className="result-message">
            You scored {numCorrectAnswers}/5 correct answers
          </p>
          <button
            className="play-again-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={playAgain}
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

export default Questions;
