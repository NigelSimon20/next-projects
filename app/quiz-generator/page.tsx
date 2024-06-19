'use client';

import { useState } from 'react';
import Link from 'next/link';
import OpenScreen from '../components/OpenScreen';


const quizGenerator = () => {
  const [showQuestions, setShowQuestions] = useState(false);

  return (
    <div>
      {!showQuestions ? (
        <OpenScreen setShowQuestions={setShowQuestions} />
      ) : (
        <Link href="/quiz">Take Quiz</Link>
      )}
    </div>
  );
}

export default quizGenerator


