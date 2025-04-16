import { useState } from 'react';
import './App.css';
import Question from './components/Question';
import Score from './components/Score';
import Header from './components/Header';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';

const quizQuestions = [
  {
    question: "What is React?",
    options: [
      "It is a general purpose programming language",
      "It is used to define styles for your web page",
      "It is a front-end open-source JavaScript library",
      "It is used to link outside articles to a web page"
    ],
    answer: "It is a front-end open-source JavaScript library"
  },
  {
    question: "What does JSX stand for?",
    options: [      
      "JavaScript",
      "JavaScript XML",
      "Java Styling Extension",
      "JavaScript Syntax Expression"
    ],
    answer: "JavaScript XML"
  },
  {
    question: "Which hook is used to handle side effects in functional components?",
    options: [
      "useState",
      "useEffect",
      "useReducer",
      "useContext"
    ],
    answer: "useEffect"
  },
  {
    question: "What is the purpose of useState in React?",
    options: [
      "To manage state in a functional component",
      "To handle side effects",
      "To perform HTTP requests",
      "To create a new component"
    ],
    answer: "To manage state in a functional component"
  },
  {
    question: "How do you declare class components?",
    options: [
      "By using {} curly brackets",
      "By using the ES6 class",
      "By using the let variable",
      "TBy using already declared components"
    ],
    answer: "By using the ES6 class"
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A way to clean up and organized your code",
      "A aspect of code that you use querySelector() to target",
      "A giant web that weaves code to make a website work",
      "A virtual representation of the real DOM"
    ],
    answer: "A virtual representation of the real DOM"
  },
  {
    question: "What is React Hooks?",
    options: [
      "They manage the static request that come in from the users input",
      "Built in functions that all the use of the state and lifecycle method within components",
      "They are used to overwrite broken code as it comes through the database",
      "Catchy lines of code used to 'hook' those that are looking through your code"
    ],
    answer: "Built in functions that all the use of the state and lifecycle method within components"
  },
  {
    question: "What is the purpose of useEffect in React?",
    options: [
      "To handle side effects in functional components",
      "To directly manipulate the DOM",
      "To define routes in the code",
      "To fetch static data only"
    ],
    answer: "To handle side effects in functional components"
  },
  {
    question: "What is the purpose of useState in React?",
    options: [
      "To manage state in a functional component",
      "To handle side effects",
      "To perform HTTP requests",
      "To create a new component"
    ],
    answer: "To manage state in a functional component"
  },
  {
    question: " How do you pass data from a parent to a child component in React?",
    options: [
      "Using hooks",
      "Using props",
      "Using classes",
      "Using hooks"
    ],
    answer: "Using props"
  } 
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption('');
  };

  return (
    <div className="quiz-app">  
       <Header />
<div className="containerQuiz">
 {!showScore && (
  <ProgressBar current={currentQuestion + 1} total={quizQuestions.length} />
 )}   
      {showScore ? (
        <Score score={score} totalQuestions={quizQuestions.length} handleRestartQuiz={handleRestartQuiz} />
      ) : (
        <Question
          questionData={quizQuestions[currentQuestion]}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          handleNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestion}
          totalQuestions={quizQuestions.length}
        />
      )}
    </div>
      <Footer/>
    </div>
  );
};

export default App;


