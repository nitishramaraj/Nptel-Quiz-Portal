import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutCharts = (countData) => {
    const { correctCount, incorrectCount, unattemptedCount } = countData;
    const data = {
        labels: ['Correct', 'Incorrect', 'Unattempted'],
        datasets: [
            {
                data: [correctCount, incorrectCount, unattemptedCount],
                backgroundColor: [
                    "rgb(32, 214, 152)",
                    "rgba(242, 0, 4)",
                    "rgb(128, 128, 128)",
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: true, position: 'bottom' },
            title: { display: true, text: 'Attempted Questions Breakdown' },
        },
    };

    return (
        <div className=" p-4 rounded-lg shadow-md">
            <div className="flex justify-center">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
};

export default DoughnutCharts;

