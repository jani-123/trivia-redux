import store from './store';

export const nexTrivia = (option,index,correct) =>{
  let quiz = [...store.getState().quiz];
  let optionAnswers = [...store.getState().answers];
  let indice = store.getState().index;
  let corrects = store.getState().correct;
  optionAnswers[indice] = option;
  store.setState({
     answers: optionAnswers,
     index: index + 1 
  });
  if (quiz[index].rptaCorrect == option) {
    this.setState({
      correct: correct + 1
    })
  }

}
