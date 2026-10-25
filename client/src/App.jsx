import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  Code2,
  FlaskConical,
  Globe,
  Home,
  RotateCcw,
  Sparkles,
  Trophy,
  XCircle,
  Zap,
} from "lucide-react";
import { quizData } from "./data/quizData";
import "./App.css";

const categories = [
  {
    name: "Programming",
    description: "Test your coding knowledge",
    icon: Code2,
    color: "purple",
  },
  {
    name: "Science",
    description: "Explore the world of science",
    icon: FlaskConical,
    color: "blue",
  },
  {
    name: "General Knowledge",
    description: "Discover something new",
    icon: Globe,
    color: "pink",
  },
];

const QUESTION_TIME = 15;
const DEFAULT_DIFFICULTY = "Easy";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [category, setCategory] = useState("Programming");
  const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  const currentQuestion = questions[questionIndex];
  const totalQuestions = questions.length;
  const correctCount = answers.filter((answer) => answer.correct).length;
  const accuracy = answers.length
    ? Math.round((correctCount / answers.length) * 100)
    : 0;

  function startQuiz(selectedCategory = category, selectedDifficulty = difficulty) {
    const selectedQuestions =
      quizData[selectedCategory]?.[selectedDifficulty] ?? [];

    if (!selectedQuestions.length) return;

    setCategory(selectedCategory);
    setDifficulty(selectedDifficulty);
    setQuestions(selectedQuestions);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setTimeLeft(QUESTION_TIME);
    setScreen("quiz");
  }

  function submitAnswer(option) {
    if (selectedAnswer !== null || !currentQuestion) return;

    setSelectedAnswer(option);
    setAnswers((previous) => [
      ...previous,
      {
        question: currentQuestion.question,
        selected: option,
        correctAnswer: currentQuestion.answer,
        correct: option === currentQuestion.answer,
        timedOut: false,
      },
    ]);
  }

  function nextQuestion() {
    if (questionIndex + 1 >= totalQuestions) {
      setScreen("result");
      return;
    }

    setQuestionIndex((previous) => previous + 1);
    setSelectedAnswer(null);
    setTimeLeft(QUESTION_TIME);
  }

  function skipTimedOutQuestion() {
    setAnswers((previous) => [
      ...previous,
      {
        question: currentQuestion.question,
        selected: null,
        correctAnswer: currentQuestion.answer,
        correct: false,
        timedOut: true,
      },
    ]);

    if (questionIndex + 1 >= totalQuestions) {
      setScreen("result");
      return;
    }

    setQuestionIndex((previous) => previous + 1);
    setSelectedAnswer(null);
    setTimeLeft(QUESTION_TIME);
  }

  useEffect(() => {
    if (screen !== "quiz" || selectedAnswer !== null) return;

    const timer = window.setInterval(() => {
      setTimeLeft((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [screen, questionIndex, selectedAnswer]);

  useEffect(() => {
    if (screen !== "quiz" || selectedAnswer !== null || timeLeft !== 0) return;
    skipTimedOutQuestion();
  }, [screen, timeLeft, selectedAnswer]);

  function goHome() {
    setScreen("home");
    setSelectedAnswer(null);
    setQuestions([]);
    setAnswers([]);
  }

  function scrollToCategories() {
    document.getElementById("categories")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="quiz-app">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <header className="navbar">
        <button className="brand brand-button" onClick={goHome}>
          <span className="brand-icon"><Brain size={25} /></span>
          <span>Quiz<span className="brand-highlight">Arena</span></span>
        </button>

        <nav className="nav-links desktop-nav">
          <button onClick={goHome}>Home</button>
          <button onClick={scrollToCategories}>Categories</button>
          <a href="#features" onClick={goHome}>Features</a>
        </nav>

        <button className="nav-cta" onClick={scrollToCategories}>
          Start Quiz <ArrowRight size={17} />
        </button>
      </header>

      {screen === "home" && (
        <main>
          <section className="hero-section" id="home">
            <div className="hero-content">
              <div className="announcement">
                <Sparkles size={15} />
                <span>YOUR KNOWLEDGE. YOUR ARENA.</span>
              </div>

              <h1>
                Challenge Your
                <br />
                Mind. <span className="gradient-text">Own The</span>
                <br />
                <span className="gradient-text">Arena.</span>
              </h1>

              <p className="hero-description">
                Turn what you know into something extraordinary.
                Take exciting quizzes, beat the clock, and discover
                how far your knowledge can take you.
              </p>

              <div className="hero-actions">
                <button className="primary-button" onClick={scrollToCategories}>
                  Explore Quizzes <ArrowRight size={19} />
                </button>
                <a href="#features" className="secondary-button">
                  Discover More
                </a>
              </div>

              <div className="hero-trust">
                <div className="avatar-stack">
                  <span>B</span><span>Q</span><span>A</span><span>+</span>
                </div>
                <div>
                  <strong>Learn. Play. Improve.</strong>
                  <p>Your next challenge starts here.</p>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="floating-tag tag-top">
                <Zap size={17} /><span>Think faster</span>
              </div>

              <div className="quiz-preview">
                <div className="preview-header">
                  <div className="preview-brand">
                    <span className="mini-brand-icon"><Brain size={18} /></span>
                    <span>QuizArena</span>
                  </div>
                  <span className="live-badge"><span /> QUIZ PREVIEW</span>
                </div>

                <div className="preview-progress-info">
                  <span>QUESTION 03 / 10</span><span>30%</span>
                </div>
                <div className="progress-track"><div className="progress-fill" /></div>

                <div className="question-icon"><Code2 size={28} /></div>
                <h3>Which language powers the web alongside HTML and CSS?</h3>

                <div className="answer-option">
                  <span className="answer-letter">A</span><span>Python</span>
                </div>
                <div className="answer-option selected-answer">
                  <span className="answer-letter">B</span><span>JavaScript</span>
                  <span className="answer-check">✓</span>
                </div>
                <div className="answer-option">
                  <span className="answer-letter">C</span><span>Java</span>
                </div>

                <div className="preview-footer">
                  <span><Clock3 size={15} /> 00:12 remaining</span>
                  <span className="preview-score">+100 XP</span>
                </div>
              </div>

              <div className="floating-tag tag-bottom">
                <Trophy size={19} />
                <div><strong>Keep going!</strong><span>Every question counts</span></div>
              </div>
            </div>
          </section>

          <section className="stats-section">
            <div className="stat-item">
              <span className="stat-icon"><TargetIcon /></span>
              <div><strong>Smart Challenges</strong><p>Test your knowledge</p></div>
            </div>
            <div className="stat-item">
              <span className="stat-icon"><Clock3 size={21} /></span>
              <div><strong>Beat The Clock</strong><p>Race against time</p></div>
            </div>
            <div className="stat-item">
              <span className="stat-icon"><Trophy size={21} /></span>
              <div><strong>Track Your Score</strong><p>Celebrate progress</p></div>
            </div>
          </section>

          <section className="categories-section" id="categories">
            <div className="section-heading">
              <div>
                <span className="section-eyebrow">PICK YOUR CHALLENGE</span>
                <h2>Choose Your <span className="gradient-text">Arena.</span></h2>
                <p>One curious mind. Endless possibilities. Where will you begin?</p>
              </div>
              <span className="category-count">03 CATEGORIES</span>
            </div>

            <div className="category-grid">
              {categories.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className={`category-card ${item.color}`}
                    key={item.name}
                    role="button"
                    tabIndex={0}
                    style={{ cursor: "pointer" }}
                    onClick={() => startQuiz(item.name, DEFAULT_DIFFICULTY)}
                    onKeyDown={(event) =>
                      event.key === "Enter" && startQuiz(item.name, DEFAULT_DIFFICULTY)
                    }
                  >
                    <div className="category-card-top">
                      <span className="category-icon"><Icon size={25} /></span>
                      <ArrowRight className="category-arrow" size={21} />
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="category-card-footer">
                      <span>5 questions</span>
                      <span className="play-label">Start quiz <ArrowRight size={14} /></span>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="features-section" id="features">
            <div className="features-copy">
              <span className="section-eyebrow">MORE THAN A QUIZ</span>
              <h2>Make every<br />second <span className="gradient-text">count.</span></h2>
              <p>
                Challenge yourself with timed questions, learn from instant
                feedback, and track your performance as you get better.
              </p>
              <button className="primary-button" onClick={scrollToCategories}>
                Find Your Challenge <ArrowRight size={18} />
              </button>
            </div>

            <div className="feature-list">
              <Feature number="01" title="Race Against Time" description="Stay focused with exciting countdown challenges." icon={<Clock3 size={22} />} />
              <Feature number="02" title="Learn Instantly" description="Get immediate feedback after answering questions." icon={<Sparkles size={22} />} />
              <Feature number="03" title="Celebrate Progress" description="Review your score and discover where you can improve." icon={<Trophy size={22} />} />
            </div>
          </section>

          <section className="bottom-cta">
            <div className="cta-sparkle"><Sparkles size={25} /></div>
            <h2>Ready to test your limits?</h2>
            <p>Your next big brain moment is just one click away.</p>
            <button className="primary-button" onClick={scrollToCategories}>
              Enter The Arena <ArrowRight size={19} />
            </button>
          </section>
        </main>
      )}

      {screen === "quiz" && currentQuestion && (
        <main className="quiz-screen">
          <div className="quiz-topbar">
            <button className="back-button" onClick={goHome}>
              <ArrowLeft size={17} /> Exit Quiz
            </button>
            <span className="quiz-category-label">{category} / {difficulty}</span>
          </div>

          <div className="quiz-main-card">
            <div className="quiz-heading-row">
              <div>
                <span className="section-eyebrow">YOUR CHALLENGE</span>
                <h2>Question {questionIndex + 1}<span> / {totalQuestions}</span></h2>
              </div>
              <div className={`timer-box ${timeLeft <= 5 ? "timer-warning" : ""}`}>
                <Clock3 size={18} />
                <span>00:{String(timeLeft).padStart(2, "0")}</span>
              </div>
            </div>

            <div className="quiz-progress">
              <div style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }} />
            </div>

            <h3 className="question-title">{currentQuestion.question}</h3>

            <div className="quiz-options">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQuestion.answer;

                let className = "quiz-option";
                if (selectedAnswer !== null && isCorrect) className += " option-correct";
                else if (isSelected && !isCorrect) className += " option-wrong";

                return (
                  <button
                    key={option}
                    className={className}
                    onClick={() => submitAnswer(option)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                    <span>{option}</span>
                    {selectedAnswer !== null && isCorrect && <CheckCircle2 size={19} />}
                    {isSelected && !isCorrect && <XCircle size={19} />}
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <div className={`feedback-box ${selectedAnswer === currentQuestion.answer ? "feedback-correct" : "feedback-wrong"}`}>
                <strong>
                  {selectedAnswer === currentQuestion.answer
                    ? "Excellent! That's correct."
                    : "Not quite. Keep learning!"}
                </strong>
                <p>{currentQuestion.explanation}</p>
              </div>
            )}

            <div className="quiz-card-footer">
              <span>{answers.filter((answer) => answer.correct).length} correct so far</span>
              <button
                className="primary-button"
                onClick={nextQuestion}
                disabled={selectedAnswer === null}
              >
                {questionIndex === totalQuestions - 1 ? "View Results" : "Next Question"}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </main>
      )}

      {screen === "result" && (
        <main className="result-screen">
          <div className="result-card">
            <div className="result-trophy"><Trophy size={35} /></div>
            <span className="section-eyebrow">CHALLENGE COMPLETED</span>
            <h1>{correctCount >= 4 ? "Amazing work!" : "Keep practicing!"}</h1>
            <p className="result-subtitle">
              You completed {category} at {difficulty} difficulty.
            </p>

            <div className="score-circle">
              <strong>{Math.round((correctCount / totalQuestions) * 100)}%</strong>
              <span>YOUR SCORE</span>
            </div>

            <div className="result-stats">
              <div><CheckCircle2 size={21} /><strong>{correctCount}</strong><span>Correct</span></div>
              <div><XCircle size={21} /><strong>{totalQuestions - correctCount}</strong><span>Incorrect / missed</span></div>
              <div><TargetIcon /><strong>{accuracy}%</strong><span>Accuracy</span></div>
            </div>

            <h3 className="review-title">Answer review</h3>

            <div className="answer-review-list">
              {answers.map((answer, index) => (
                <div className="answer-review-item" key={`${index}-${answer.question}`}>
                  <span className={answer.correct ? "review-status review-good" : "review-status review-bad"}>
                    {answer.correct ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                  </span>
                  <div>
                    <strong>{index + 1}. {answer.question}</strong>
                    <p>Your answer: {answer.selected ?? "Time expired"}</p>
                    {!answer.correct && <p>Correct answer: {answer.correctAnswer}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="result-actions">
              <button className="primary-button" onClick={() => startQuiz(category, difficulty)}>
                <RotateCcw size={17} /> Play Again
              </button>
              <button className="secondary-button result-home-button" onClick={goHome}>
                <Home size={17} /> Back Home
              </button>
            </div>
          </div>
        </main>
      )}

      <footer className="footer">
        <button className="brand brand-button footer-brand" onClick={goHome}>
          <span className="brand-icon"><Brain size={22} /></span>
          <span>Quiz<span className="brand-highlight">Arena</span></span>
        </button>
        <p>Challenge your mind. One question at a time.</p>
        <span className="copyright">© {new Date().getFullYear()} QuizArena</span>
      </footer>
    </div>
  );
}

function Feature({ number, title, description, icon }) {
  return (
    <div className="feature-item">
      <span className="feature-number">{number}</span>
      <div><h3>{title}</h3><p>{description}</p></div>
      {icon}
    </div>
  );
}

function TargetIcon() {
  return <Zap size={21} />;
}