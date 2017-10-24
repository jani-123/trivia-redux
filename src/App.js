import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { nexTrivia, saveAnswers } from "./actions";
import { connect } from "redux-zero/react"; //  importa de react

const YourAnswers = ({ quiz, answers }) => {
  const respuestas = answers.map((item, index) => {
    return (
      <p key={index}>
        {quiz[index].questions}
        <strong>{item}</strong>
      </p>
    );
  });
  return (
    <div>
      <h2> Here are your answers: </h2>
      <div>{respuestas}</div>
      <button className="btn btn-lg btn-primary"> Submit </button>
    </div>
  );
};

const Option = ({ index, quiz }) => {
  return quiz.map((value, index) => {
    return (
      <div className="btnRespuestas">
        <button className="btn btn-lg">{value.options}</button>
      </div>
    );
  });
};

const OptionsList = ({ quiz, index, correct }) => {
  const selectOptions = e => {
    let option = e.target.id;
    nexTrivia(option, index , correct);
    //correct(correct);
  };
  const list = quiz[index].options.map((value, index) => {
    return (
      <li key={index}>
        <button onClick={selectOptions} id={value}>
          {value}
        </button>
      </li>
    );
  });
  return <ul>{list}</ul>;
};
const TriviaApp = ({ quiz, index, answers, correct }) => {
  return (
    <div>
      <div>
        {index !== quiz.length && <img src={quiz[index].image} />}
        {index === quiz.length && (
          <img src="https://image.freepik.com/iconos-gratis/camion_318-143767.jpg" />
        )}
      </div>
      <div>
        {index !== quiz.length && <h4>{quiz[index].questions}</h4>}
        {index === quiz.length && <h3> correct</h3>}
      </div>
      <div>
        {index !== quiz.length && (
          <OptionsList quiz={quiz} index={index} correct={correct} />
        )}
        {index === quiz.length && <YourAnswers quiz={quiz} answers={answers} />}
      </div>
    </div>
  );
};

const mapToProps = ({ quiz, index, answers, correct }) => ({
  quiz,
  index,
  answers,
  correct
});
export default connect(mapToProps)(TriviaApp);
