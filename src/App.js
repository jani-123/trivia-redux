import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'redux-zero/react'; //  importa de react

const Option = ( {index, option, model} ) => {
  const onOptionSelect = (e) =>  {
     console.log('value: ', option);
     model.setAnswerAt(option, index);
  };

  return (
     <div>
        <div>
           <span> { String.fromCharCode(65 + index)} -  </span>
           <button onClick = {onOptionSelect} >  {option} </button>
        </div>
     </div>);
};

const TriviaApp = ({title, model}) => {
  const Questions = () =>{
    return(
      <div>
         <p>Pregunta</p>
      </div>
    )
  }
  return (
     <div> 
        <img src="https://icon-icons.com/icons2/281/PNG/256/Airport-icon_30354.png"/>
        <p>Questions </p>
        <div>
           {
              Questions              
           }
           {
              <Option />
           }
           
        </div>
     </div>
  );
}

const mapToProps = ({ todos }) => ({ todos });

export default connect(mapToProps)(TriviaApp);