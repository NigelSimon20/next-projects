import { FunctionComponent } from 'react';

interface OpenScreenProps {
  setShowQuestions: (value: boolean) => void;
}

const OpenScreen: FunctionComponent<OpenScreenProps> = ({ setShowQuestions }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6 text-[#293264]">Quizzical</h1>
      <p className="text-xl mb-8">Some description if needed</p>
      <button
        className="px-6 py-3 bg-[#4D5B9E] text-white rounded-lg hover:bg-blue-900"
        onClick={() => setShowQuestions(true)}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default OpenScreen;