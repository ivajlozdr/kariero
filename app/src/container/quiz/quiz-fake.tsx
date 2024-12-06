import { FC, Fragment, useState, useEffect } from "react";
import Careers from "./careers"; // Import the Careers component
import { AnswerKey, AnswerScore, RiasecScores } from "./quiz-types";
import { questions, riasecMapping, options } from "./quiz-data";

const Quiz: FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [pulse, setPulse] = useState(false);
  const [fade, setFade] = useState(false);
  const [buttonFade, setButtonFade] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalFade, setFinalFade] = useState(false); // State for final fade
  const [abilities, setAbilities] = useState<string | null>(null);
  const [skills, setSkills] = useState<string | null>(null);
  const [knowledge, setKnowledge] = useState<string | null>(null);
  const [education, setEducation] = useState<string | null>(null);
  const [interests, setInterests] = useState<string | null>(null);
  const [workStyle, setWorkStyle] = useState<string | null>(null);
  const [workValues, setWorkValues] = useState<string | null>(null);
  const [technologySkills, setTechnologySkills] = useState<string | null>(null);
  const [riasecScores, setRiasecScores] = useState<RiasecScores>({
    Realistic: 0,
    Investigative: 0,
    Artistic: 0,
    Social: 0,
    Enterprising: 0,
    Conventional: 0
  });

  const handleAnswerSelect = (answer: string, questionId: number) => {
    // Make sure the answer is of type AnswerKey
    const validAnswers: AnswerKey[] = [
      "Strongly Agree",
      "Agree",
      "Slightly Agree",
      "Neutral",
      "Slightly Disagree",
      "Disagree",
      "Strongly Disagree"
    ];

    if (!validAnswers.includes(answer as AnswerKey)) {
      console.error("Invalid answer selected");
      return;
    }

    // Update the riasecScores state using the updateAnswerScore function
    setRiasecScores((prevScores) =>
      updateAnswerScore(questionId.toString(), answer as AnswerKey, prevScores)
    );

    setPulse(true);
    setSelectedAnswer(answer);
  };

  const getAnswerScore = (answer: AnswerKey): number => {
    const scores: Record<AnswerKey, number> = {
      "Strongly Agree": 3,
      Agree: 2,
      "Slightly Agree": 1,
      Neutral: 0,
      "Slightly Disagree": -1,
      Disagree: -2,
      "Strongly Disagree": -3
    };
    return scores[answer] || 0;
  };

  const updateAnswerScore = (
    questionId: string,
    answer: AnswerKey,
    previousScores: RiasecScores
  ): RiasecScores => {
    // Calculate the new score for the current question
    const updatedScore = getAnswerScore(answer);

    // Create a new object with the updated score for the specific question (if needed)
    // Here we update only the selected category
    const updatedScores = { ...previousScores };

    // If the question maps to a single category, we update that specific category
    const riasecCategory = riasecMapping[parseInt(questionId)];

    if (typeof riasecCategory === "string") {
      updatedScores[riasecCategory] =
        (updatedScores[riasecCategory] || 0) + updatedScore;
    } else if (Array.isArray(riasecCategory)) {
      // If it's an array of categories, update each one
      riasecCategory.forEach((category) => {
        updatedScores[category] = (updatedScores[category] || 0) + updatedScore;
      });
    }

    return updatedScores;
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setButtonFade(true);
      setFade(true);

      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setPulse(false);
        setFade(false);
        setButtonFade(false);
      }, 500);
    } else {
      setFinalFade(true);
      setButtonFade(true);

      setTimeout(async () => {
        setQuizFinished(true);
        await handleQuizFinished();
      }, 500);
    }
  };

  const handleQuizFinished = async () => {
    const userAnswers = {
      riasecScores // This includes all the RIASEC scores
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`
          },
          body: JSON.stringify({
            model: "gpt-4o-2024-08-06",
            messages: [
              {
                role: "system",
                content:
                  "I am a career guidance assistant. I will help the user determine their career path based on their quiz answers."
              },
              {
                role: "user",
                content: `The user answered the quiz with the following results: ${JSON.stringify(
                  userAnswers
                )}. Please analyze and provide values for Abilities, Skills, Knowledge, Education, Interests, Work Style, Work Values, and Technology Skills. Please return the response ONLY in proper JSON format with the following fields: Abilities, Skills, Knowledge, Education, Interests, Work Style, Work Values, and Technology Skills.`
              }
            ]
          })
        }
      );

      const data = await response.json();
      const content = data.choices[0].message.content;
      const json = content
        .replace(/(^```json|```$)/gi, "") // Remove ```json or ```
        .replace(/(^```|```$)/g, "") // Remove general ```
        .trim();

      console.log("Good? ", json);

      // Assuming the response content includes these categories
      const responseData = JSON.parse(json); // Convert the string back into JSON

      const {
        Abilities: abilities,
        Skills: skills,
        Knowledge: knowledge,
        Education: education,
        Interests: interests,
        WorkStyle: workStyle,
        WorkValues: workValues,
        TechnologySkills: technologySkills
      } = responseData;

      // Set the state with the response data
      setAbilities(abilities);
      setSkills(skills);
      setKnowledge(knowledge);
      setEducation(education);
      setInterests(interests);
      setWorkStyle(workStyle);
      setWorkValues(workValues);
      setTechnologySkills(technologySkills);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    if (pulse) {
      const timeout = setTimeout(() => setPulse(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [pulse]);

  useEffect(() => {
    console.log("bim bap boop boop bim bap bam. ", riasecScores);
  }, [riasecScores]);

  if (quizFinished) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Careers />
      </div>
    );
  }

  return (
    <Fragment>
      <div
        className={`min-h-screen flex flex-col justify-center items-center ${
          finalFade ? "fade-out" : ""
        }`}
      >
        <p className="h5 font-semibold mb-2 text-center">
          Quiz: Career Guidance
        </p>
        <div className={`mb-4 text-center ${fade ? "fade-out" : "fade-in"}`}>
          <p className="mb-4">{questions[currentQuestionIndex]}</p>
        </div>
        <div className="flex items-center mb-4 gap-4">
          <span
            style={{
              color: "#A1CDA8",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginRight: "30px"
            }}
          >
            Да
          </span>
          <div className="flex justify-center gap-8 flex-grow">
            {options.map((option) => (
              <div
                key={option.label}
                className="pulse-ring"
                style={{ height: "120px" }}
              >
                <button
                  className={`flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                    selectedAnswer === option.label ? "selected" : ""
                  }`}
                  style={{
                    borderColor: option.borderColor,
                    borderWidth: "3px",
                    color: option.borderColor,
                    backgroundColor:
                      selectedAnswer === option.label
                        ? option.borderColor
                        : "transparent",
                    width:
                      option.size === "scale-150"
                        ? "100px"
                        : option.size === "scale-125"
                        ? "80px"
                        : "60px",
                    height:
                      option.size === "scale-150"
                        ? "100px"
                        : option.size === "scale-125"
                        ? "80px"
                        : "60px"
                  }}
                  onClick={() =>
                    handleAnswerSelect(option.label, currentQuestionIndex + 1)
                  }
                >
                  {selectedAnswer === option.label && pulse && (
                    <div
                      className="pulse-effect"
                      style={{
                        width:
                          option.size === "scale-150"
                            ? "100px"
                            : option.size === "scale-125"
                            ? "80px"
                            : "60px",
                        height:
                          option.size === "scale-150"
                            ? "100px"
                            : option.size === "scale-125"
                            ? "80px"
                            : "60px"
                      }}
                    />
                  )}
                </button>
              </div>
            ))}
          </div>
          <span
            style={{
              color: "#AD9BAA",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginLeft: "30px"
            }}
          >
            Не
          </span>
        </div>
        <div className="mt-4 text-center">
          <button
            className={`ti-btn ti-btn-primary w-full py-2 rounded-lg next-question ${
              buttonFade ? "fade-out" : "fade-in"
            }`}
            onClick={handleNextQuestion}
            style={{ visibility: selectedAnswer ? "visible" : "hidden" }}
          >
            Следващ въпрос
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Quiz;
