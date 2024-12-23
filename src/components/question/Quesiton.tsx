interface QuestionProps {
  currentQuestionData: {
    id: number;
    name: string;
    variants: { id: number; name: string; isCorrect: boolean }[];
  };
  selectedAnswer: number | null;
  handleAnswer: (variantId: number, isCorrect: boolean) => void;
}
const Question: React.FC<QuestionProps> = ({
  currentQuestionData,
  selectedAnswer,
  handleAnswer,
}) => {
  const labels = ["A", "B", "C", "D"];
  return (
    <div>
      {currentQuestionData.variants.map((variant, index) => (
        <div
          key={variant.id}
          className={`p-4 my-2 rounded-lg cursor-pointer transition-colors font-medium text-gray-800 relative flex justify-center items-center ${
            selectedAnswer === null
              ? "bg-gray-200 hover:bg-gray-300"
              : variant.id === selectedAnswer
              ? variant.isCorrect
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() =>
            selectedAnswer === null &&
            handleAnswer(variant.id, variant.isCorrect)
          }
        >
          <div className="absolute bg-white rounded-full w-8 h-8 flex justify-center items-center left-3">
            {labels[index]}
          </div>
          {variant.name}
        </div>
      ))}
    </div>
  );
};

export default Question;
