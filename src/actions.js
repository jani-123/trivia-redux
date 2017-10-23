import store from './store';

export const answer = (value, index) =>{
  let oldList = store.getState().quiz;
  const newList = oldList.concat({
     id: oldList.length,
     text: value
  });
  store.setState({
     quiz: newList,
     index: +1
  });

}

// export const getImage = () => {
//       store.quiz[ store.index ].image;
//       console.log(store.quiz[ store.index ].image);
//    }

// export const getOptions = () => {
//       store.quiz.options[ store.index ];
//    }