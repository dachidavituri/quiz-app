import { useState } from "react";
import { quiz } from "./data.ts";
import Question from "./components/question/Quesiton.tsx";
import Result from "./components/result/Result.tsx";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const { name, questions } = quiz;
  const currentQuestionData = questions.find((q) => q.id === currentQuestion);

  const handleAnswer = (variantId: number, isCorrect: boolean) => {
    setSelectedAnswer(variantId);
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      if (currentQuestionData?.score) {
        setScore(score + currentQuestionData.score);
      }
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const progressPercentage = Math.min(
    (currentQuestion / questions.length) * 100,
    100
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">{name}</h1>
        <div className="flex items-center mb-5">
          <div className="w-full bg-gray-300 rounded-full h-4 relative">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="ml-2 text-black ">
            <span>{currentQuestion}</span>/<span>{questions.length}</span>
          </div>
        </div>
        <div>
          {currentQuestionData ? (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                {currentQuestionData.name}
              </h2>
              <Question
                currentQuestionData={currentQuestionData}
                selectedAnswer={selectedAnswer}
                handleAnswer={handleAnswer}
              />
              <button
                disabled={selectedAnswer == null}
                className={`mt-6 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300 ${
                  selectedAnswer == null
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                }`}
                onClick={handleNextQuestion}
              >
                {currentQuestion === questions.length ? "Finish" : "Continue"}
              </button>
            </div>
          ) : (
            <Result
              correctAnswers={correctAnswers}
              totalQuestions={questions.length}
              score={score}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
