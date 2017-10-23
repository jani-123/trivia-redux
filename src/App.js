import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {answer} from './actions';
import { connect } from 'redux-zero/react'; //  importa de react

const Option = ( {index , quiz} ) => {
  return quiz.map((value, index) => {
    return (
      <div className="btnRespuestas">
        <button className='btn btn-lg'>{value.options}</button>
      </div>
    )
  })
};
const OptionsList = ({quiz,index}) => {
  const selectOptions = (e) =>  {
    let value = e.target.id;
    console.log('value: ', value);
    alert("sale");
    answer(value, index);
    console.log('index: ', index);
 }; 
  const list = quiz[index].options.map((value,index)=>{
    return(
      <li key={index}><button onClick={selectOptions} id={value}>{value}</button></li>
    )
  });
  return(
    <ul>
    {list}
    </ul>
  )

}
const TriviaApp = ({quiz, index}) => {
  
  return (
     <div> 
        <div>
          <img src={quiz[index].image}/>
        </div>
        <div>
          <p>{quiz[index].questions}</p>
        </div>
        <div>
         
            {
              <OptionsList quiz={quiz} index={index}/>
             

            }
          
           
        </div>
     </div>
  );
}

const mapToProps = ({ quiz ,index}) => ({ quiz ,index} );
export default connect(mapToProps)(TriviaApp);