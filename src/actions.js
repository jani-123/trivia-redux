import store from './store';

export const nexTrivia = (option,index) =>{
  let optionAnswers = [...store.getState().answers];
  let indice = store.getState().index;
  let corrects = store.getState().correct;
  optionAnswers[indice] = option;
  store.setState({
     answers: optionAnswers,
     index: index + 1 
  });
}

