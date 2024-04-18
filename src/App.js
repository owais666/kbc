import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);

  const [stop, setStop] = useState(false);

  const [earned, setEarned] = useState("Rs. 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },

    {
      id: 4,
      question: " Which animal is known as the 'Ship of the Desert?'",
      answers: [
        {
          text: "Tiger",
          correct: false,
        },
        {
          text: "Zebra",
          correct: false,
        },
        {
          text: "Camel",
          correct: true,
        },
        {
          text: "Panda",
          correct: false,
        },
      ],
    },

    {
      id: 5,
      question: "The language of Lakshadweep. a Union Territory of India, is",
      answers: [
        {
          text: "Tamil",
          correct: false,
        },
        {
          text: "Hindi",
          correct: false,
        },
        {
          text: "Malayalam",
          correct: true,
        },
        {
          text: "Telugu",
          correct: false,
        },
      ],
    },

    {
      id: 6,
      question: "Bahubali festival is related to",
      answers: [
        {
          text: "Islam",
          correct: false,
        },
        {
          text: "Hinduism",
          correct: false,
        },
        {
          text: "Buddhism",
          correct: false,
        },
        {
          text: "Jainism",
          correct: true,
        },
      ],
    },

    {
      id: 7,
      question: "September 27 is celebrated every year as",
      answers: [
        {
          text: "Teachers' Day",
          correct: false,
        },
        {
          text: "National Integration Day",
          correct: false,
        },
        {
          text: "World Tourism Day",
          correct: true,
        },
        {
          text: "International Literacy Day",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question: "'Good Friday' is observed to commemorate the event of",
      answers: [
        {
          text: "crucification 'of Jesus Christ",
          correct: true,
        },
        {
          text: "birth of Jesus Christ",
          correct: false,
        },
        {
          text: "birth of' St. Peter",
          correct: false,
        },
        {
          text: "rebirth of Jesus Christ",
          correct: false,
        },
      ],
    },

    {
      id: 9,
      question: "Who is the author of the book 'Amrit Ki Ore'?",
      answers: [
        {
          text: "Mukesh Kumar",
          correct: false,
        },
        {
          text: "Narendra Mohan",
          correct: true,
        },
        {
          text: "Upendra Nath",
          correct: false,
        },
        {
          text: "Nirad C. Choudhary",
          correct: false,
        },
      ],
    },

    {
      id: 10,
      question: "Pongal is a popular festival of which state?",
      answers: [
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Kerala",
          correct: false,
        },
        {
          text: "Andhra Pradesh",
          correct: false,
        },
        {
          text: "Tamil Nadu",
          correct: true,
        },
      ],
    },

    {
      id: 11,
      question: "Which of the following Muslim festivals is based on the 'Holy Quran' ?",
      answers: [
        {
          text: "Id -ul-Zuha",
          correct: true,
        },
        {
          text: "Id -ul-Fitr",
          correct: false,
        },
        {
          text: "Bakri-id",
          correct: false,
        },
        {
          text: "Moharram",
          correct: false,
        },
      ],
    },

    {
      id: 12,
      question: "The festival of Nabanna is celebrated predominatly in",
      answers: [
        {
          text: "Andhra Pradesh",
          correct: false,
        },
        {
          text: "Rajasthan",
          correct: false,
        },
        {
          text: "Kamataka",
          correct: false,
        },
        {
          text: "Orissa",
          correct: true,
        },
      ],
    },

    {
      id: 13,
      question: "Rath Yatra is famous festival at",
      answers: [
        {
          text: "Ayodhya",
          correct: false,
        },
        {
          text: "Mathura",
          correct: false,
        },
        {
          text: "Dwaraka",
          correct: false,
        },
        {
          text: "Puri",
          correct: true,
        },
      ],
    },

    {
      id: 14,
      question: "Onam is the main festival of",
      answers: [
        {
          text: "Kerala",
          correct: true,
        },
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Andhra Pradesh",
          correct: false,
        },
        {
          text: "Tamil Nadu",
          correct: false,
        },
      ],
    },

    {
      id: 15,
      question: "Which of the-following is wrongly matched?",
      answers: [
        {
          text: "Qutab Minar- Delhi",
          correct: false,
        },
        {
          text: "Taj Mahal -Agra",
          correct: false,
        },
        {
          text: "Ajanta Caves -Maharashtra",
          correct: false,
        },
        {
          text: "Charminar -Lucknow",
          correct: false,
        },
      ],
    },

   
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "Rs. 1,000" },
        { id: 2, amount: "Rs. 2,000" },
        { id: 3, amount: "Rs. 3,000" },
        { id: 4, amount: "Rs. 5,000" },
        { id: 5, amount: "Rs. 10,000" },
        { id: 6, amount: "Rs. 20,000" },
        { id: 7, amount: "Rs. 40,000" },
        { id: 8, amount: "Rs. 80,000" },
        { id: 9, amount: "Rs. 1,60,000" },
        { id: 10, amount: "Rs. 3,20,000" },
        { id: 11, amount: "Rs. 6,40,000" },
        { id: 12, amount: "Rs. 12,50,000" },
        { id: 13, amount: "Rs. 25,00,000" },
        { id: 14, amount: "Rs. 50,00,000" },
        { id: 15, amount: "Rs. 1,00,00,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <>
                <h1 style={{ textAlign: "center", margin: "auto" }}>
                  {" "}
                  {username}
                </h1>
                <h1 className="endText">You earned: {earned} </h1>
                <button
                  className="startButton"
                  style={{ width: "123px", margin: "auto" }}
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Try Again
                </button>
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>

                <div className="bottom">
                  <Quiz
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
