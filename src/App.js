import React from "react";
import "./styles.css";
import { useState } from "react";

const recommendationsDatabase = {
  RCs: [
    {
      name: "The Guardian",
      levelOfDifficulty: "intermediate"
    },
    { name: "AEON Essays", levelOfDifficulty: "tough" },
    { name: "New York Times", levelOfDifficulty: "intermediate" },
    { name: "Wall Street Journal", levelOfDifficulty: "tough" }
  ],

  Quants: [
    {
      name: "Bharat Gupta-Free Sessions-UnAcademy",
      levelOfDifficulty: "beginner"
    },
    {
      name: "Rodha- Youtube",
      levelOfDifficulty: "intermediate"
    },
    {
      name: "Elites Grid-Quants",
      levelOfDifficulty: "intermediate"
    }
  ],
  LRDI: [
    {
      name: "Elites Grid-LRDI",
      levelOfDifficulty: "beginner-intermediate"
    },
    {
      name: "Anastasis Shankar-Youtube",
      levelOfDifficulty: "intermediate"
    }
  ]
};

export default function App() {
  const [selectedSection, setSection] = useState("Quants");
  function SectionClickHandler(Section) {
    setSection(Section);
  }
  return (
    <div className="App">
      <h1> FREE MBA Preparation Resources </h1>
      <p style={{ fontSize: "smaller" }}>
        If you are studing for MBA this is a list of FREE resources which you
        can refer:
      </p>

      <div>
        {Object.keys(recommendationsDatabase).map((Section) => (
          <button
            key={Section.name}
            onClick={() => SectionClickHandler(Section)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {Section}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {recommendationsDatabase[selectedSection].map((topic) => (
            <li
              key={topic.name}
              style={{
                listStyle: "none",
                padding: ".5rem",
                border: "1px solid #D1D5DB",
                width: "90%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {topic.name} </div>
              <div style={{ fontSize: "smaller" }}>
                {topic.levelOfDifficulty}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
