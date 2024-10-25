"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function EduLeaderQuizCardComponent({ data: weekData }) {
    const router = useRouter();

    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(weekData[index].question);
    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState(weekData[index].options);
    const [correctCount, setCorrectCount] = useState(0);
    const [attemptedCount, setAttemptedCount] = useState(0);
    const [savedOptions, setSavedOptions] = useState(new Array(weekData.length).fill(null));
    const [isCorrect, setIsCorrect] = useState(null);
    const [isSaved, setIsSaved] = useState(null);

    useEffect(() => {
        setQuestion(weekData[index].question);
        setOptions(weekData[index].options);

        //Since page is changed, update the previous selected option from savedOptions array.
        setSelectedOption(savedOptions[index]);

        console.log(correctCount, attemptedCount);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, weekData, savedOptions]);

    const handleOptionSelect = (option) => {
        if (savedOptions[index] === null) {
            setSelectedOption(option);
        }
    };

    const handleNextButton = () => {
        setIsSaved(null);
        if (index < weekData.length - 1) {
            setIndex(index + 1);
        }
    };

    const handlePrevButton = () => {
        setIsSaved(null);
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const handleSaveButton = () => {

        if (!selectedOption) return;

        // Check if option is already selected for this question
        const prevSelectedOption = savedOptions[index];

        if (!prevSelectedOption) {
            setAttemptedCount(attemptedCount + 1);
        }

        setIsSaved(true);

        const newSavedOptions = [...savedOptions];
        newSavedOptions[index] = selectedOption;
        setSavedOptions(newSavedOptions);

        if (selectedOption.isCorrect) {
            console.log("Selected option is correct");
            setIsCorrect(true);
            if (!prevSelectedOption) {
                setCorrectCount(correctCount + 1);
            }
            options.map((option) => {
                if (option.isCorrect) {
                    console.log(option.text);
                }
            })
        }
        else {
            console.log("Selected option is wrong");
            options.map((option) => {
                if (option.isCorrect) {
                    console.log(option.text);
                }
            })
            setIsCorrect(false);
        }
    }


    useEffect(() => {
        localStorage.setItem('totalQuestions', weekData.length);
        localStorage.setItem('correctCount', correctCount);
        localStorage.setItem('attemptedCount', attemptedCount);
    }, [attemptedCount, correctCount, weekData.length]);

    const handleSubmit = () => {
        router.push('/result');
    }

    return (
        <div>
            {index >= 0 && index <= weekData.length - 1 && (
                <div
                    className='md:h-[91vh] flex items-center justify-center flex-col p-10'>
                    {/* Question Count */}
                    <h1
                        className='md:text-3xl text-xl font-bold mb-10'>
                        Question: <span
                            className='md:text-2xl text-lg font-normal'>{index + 1}/{weekData.length}</span>
                    </h1>

                    {/* question */}
                    <div>
                        <h1
                            className='md:text-2xl text-lg font-semibold sm:text-center mb-10'>{question}</h1>
                    </div>

                    {/* options */}
                    <div>
                        {options.map((option) => (
                            <div key={option.id}>
                                <div
                                    className={`flex justify-center items-center w-full px-12 p-2 m-2 rounded-md border-2 transition duration-100 ease-in-out cursor-pointer
                ${selectedOption === option ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300'}
                ${selectedOption === option ? 'text-white' : 'text-midnight'} 
                hover:bg-indigo-200 hover:text-indigo-500`}
                                    onClick={() => handleOptionSelect(option)}>
                                    <h1 className='md:text-xl text-lg font-medium capitalize text-left'>
                                        {option.text}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Correct or Incorrect */}
                    {isSaved && (
                        <>
                            <h1 className={`md:text-2xl text-lg font-semibold text-center mt-8 ${isCorrect ? 'text-green-500 font-bold' : 'text-red-400 font-bold'}`}>
                                {isCorrect ? 'Correct' : 'Incorrect'}
                            </h1>
                            <h1 className={`md:text-2xl block text-lg font-semibold capitalize text-center ${isCorrect ? 'text-green-500' : 'text-red-400'}`}>
                                Correct Answer:
                                {options.map((option) => {
                                    if (option.isCorrect) {
                                        return (
                                            <p key={option.id} className='text-center'>{option.text}</p>
                                        )
                                    }
                                })}
                            </h1>
                        </>

                    )}

                    <p className='m-3 text-red-500'> **Remember to click &quot;Save&quot; after answering each question before proceeding to the next one.</p>


                    {/* buttons */}
                    <div
                        className='flex justify-evenly flex-wrap md:w-[70rem] w-full mt-5'>
                        <button
                            disabled={index === 0}

                            className='h-10 w-28 bg-indigo-700 p-4 flex justify-center items-center text-white rounded-xl hover:bg-indigo-800 font-bold my-2 disabled:opacity-30'
                            onClick={handlePrevButton}>
                            Previous
                        </button>
                        <button
                            disabled={index === weekData.length - 1}

                            className='h-10 w-28 bg-indigo-700 p-4 flex justify-center items-center text-white rounded-xl hover:bg-indigo-800 font-bold my-2 disabled:opacity-50 '
                            onClick={handleNextButton}>
                            Next
                        </button>
                        <button

                            className='h-10 w-28 bg-indigo-700 p-4 flex justify-center items-center text-white rounded-xl hover:bg-indigo-800 font-bold my-2'
                            onClick={handleSaveButton}>
                            Save
                        </button>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className={`h-10 w-28 bg-indigo-700 p-4 flex justify-center items-center text-white rounded-xl hover:bg-indigo-800 font-bold my-2 ${index !== weekData.length - 1 ? 'hidden' : 'block'}`}>
                            Submit
                        </button>


                    </div>
                </div>
            )}
        </div>
    );
}

export default EduLeaderQuizCardComponent;

