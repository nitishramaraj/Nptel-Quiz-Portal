"use client"

import React, { useEffect } from 'react';
import EduLeaderQuizCardComponent from '../../../components/EduLeaderQuizCard/EduLeaderQuizCard';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleQuestionOptions(questions) {
  return questions.map(question => {
    question.options = shuffleArray(question.options);
    return question;
  });
}

function shuffleWeekData(weekData) {
  return shuffleArray(weekData);
}

function Page({ params }) {
  let weekNumber = parseInt(params.ID.split('-')[1]);
  if (isNaN(weekNumber)) {
    weekNumber = "All";
  }
  console.log(weekNumber);
  let weekData = require(`../../../../EducationalLeadership/week${weekNumber}.json`);

  // Shuffle the weekData and options within each question
  weekData = shuffleWeekData(weekData);
  weekData = shuffleQuestionOptions(weekData);

  useEffect(() => {
    // Remove data from the local storage of the previous Quiz
    localStorage.removeItem('correctCount');
    localStorage.removeItem('attemptedCount');
  }, [])

  return (
    <>
      <EduLeaderQuizCardComponent data={weekData} />
    </>
  );
}

export default Page;
