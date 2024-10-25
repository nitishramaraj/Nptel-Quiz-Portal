"use client"

import React, { useEffect, useState } from 'react';
import DoughnutCharts from '../components/DoughnutChart/DoughnutChart';

function Page() {
  const [correctCount, setCorrectCount] = useState(0);
  const [attemptedCount, setAttemptedCount] = useState(0);
  const [total, setTotal] = useState(10);

  useEffect(() => {
    const total1 = parseInt(localStorage.getItem('totalQuestions') || '10');
    const storedCorrectCount = parseInt(localStorage.getItem('correctCount') || '0', total);
    const storedAttemptedCount = parseInt(localStorage.getItem('attemptedCount') || '0', total);
    setCorrectCount(storedCorrectCount);
    setAttemptedCount(storedAttemptedCount);
    setTotal(total1);
  }, []);

  const unattemptedCount = total - attemptedCount;
  const incorrectCount = attemptedCount - correctCount;

  return (
    <>
      <div className='flex justify-center items-center flex-col p-12 w-full'>
        <h1 className='md:text-5xl text-2xl text-indigo-900 m-4 font-bold'>Result</h1>
        <p className='md:text-2xl text-lg text-midnight m-4 text-center'>Congratulations! You have completed the quiz.</p>

        <div className='flex items-center justify-evenly lg:flex-row w-full flex-col'>

          <div className='text-center'>
            <h1 className='text-xl font-semibold text-indigo-400'>Correct vs Incorrect</h1>
            <DoughnutCharts correctCount={correctCount} incorrectCount={incorrectCount} unattemptedCount={0} />
          </div>

          <div className='m-8 text-center'>
            <h1 className='text-3xl font-bold text-indigo-700'> Your Score:</h1>
            <h1 className='text-xl font-bold text-midnight mb-10'>{correctCount} / {total}</h1>
            <p className='text-2xl text-midnight'>Correct: {correctCount}</p>
            <p className='text-2xl text-midnight'>Incorrect: {incorrectCount}</p>
            <p className='text-2xl text-midnight'>Unattempted: {unattemptedCount}</p>
          </div>

          <div className='text-center'>
            <h1 className='text-xl font-semibold text-indigo-400'>Overall Score Distribution</h1>
            <DoughnutCharts correctCount={correctCount} incorrectCount={incorrectCount} unattemptedCount={unattemptedCount} />
          </div>

        </div>
      </div >
    </>
  )
}

export default Page;
