import store from './store';

export const answer = (value, index) =>{
  let oldList = store.getState().quiz;
  const newList = oldList.concat({
     id: oldList.length,
     text: value
  });
  store.setState({
     quiz: newList,
     index: index + 1
  });

}
