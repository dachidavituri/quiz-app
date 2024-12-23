import React from "react";

interface ResultProps {
  correctAnswers: number;
  totalQuestions: number;
  score: number;
}

const Result: React.FC<ResultProps> = ({
  correctAnswers,
  totalQuestions,
  score,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Results of Quiz</h2>
      <div className="flex justify-center items-center mb-4">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex justify-center items-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.71 7.21001C18.617 7.11628 18.5064 7.04189 18.3846 6.99112C18.2627 6.94035 18.132 6.91422 18 6.91422C17.868 6.91422 17.7373 6.94035 17.6154 6.99112C17.4936 7.04189 17.383 7.11628 17.29 7.21001L9.84001 14.67L6.71001 11.53C6.61349 11.4368 6.49955 11.3635 6.37469 11.3143C6.24984 11.2651 6.11651 11.2409 5.98233 11.2432C5.84815 11.2456 5.71574 11.2743 5.59266 11.3278C5.46959 11.3813 5.35825 11.4585 5.26501 11.555C5.17177 11.6515 5.09846 11.7655 5.04925 11.8903C5.00005 12.0152 4.97592 12.1485 4.97824 12.2827C4.98056 12.4169 5.00929 12.5493 5.06278 12.6724C5.11628 12.7954 5.19349 12.9068 5.29001 13L9.13001 16.84C9.22297 16.9337 9.33358 17.0081 9.45543 17.0589C9.57729 17.1097 9.708 17.1358 9.84001 17.1358C9.97202 17.1358 10.1027 17.1097 10.2246 17.0589C10.3464 17.0081 10.457 16.9337 10.55 16.84L18.71 8.68001C18.8115 8.58637 18.8925 8.47272 18.9479 8.34622C19.0033 8.21972 19.0319 8.08312 19.0319 7.94501C19.0319 7.80691 19.0033 7.67031 18.9479 7.54381C18.8925 7.41731 18.8115 7.30366 18.71 7.21001Z"
              fill="#31CD63"
            />
          </svg>
        </div>
      </div>
      <p className="text-lg font-medium text-gray-700 mb-2">
        You answered {correctAnswers} out of {totalQuestions} questions
        correctly.
      </p>
      <p className="text-lg font-medium text-gray-700">
        Your score: <span className="font-bold text-green-600">{score}</span>
      </p>
    </div>
  );
};

export default Result;
