import { FunctionComponent } from 'react';

interface OpenScreenProps {
  setShowQuestions: (value: boolean) => void;
}

const OpenScreen: FunctionComponent<OpenScreenProps> = ({ setShowQuestions }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Quizzical</h1>
      <p className="text-lg mb-8">Some description</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setShowQuestions(true)}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default OpenScreen;