'use client';

import { useState } from 'react';
import Link from 'next/link';
import OpenScreen from '../components/OpenScreen';
import Questions from '../components/Questions';

const quizGenerator = () => {
  const [showQuestions, setShowQuestions] = useState(false);

  return (
    <div>
      {!showQuestions ? (
        <OpenScreen setShowQuestions={setShowQuestions} />
      ) : (
        <Link href=""><Questions /></Link>
      )}
    </div>
  );
}

export default quizGenerator


