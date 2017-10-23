import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { HashRouter, Switch, Route } from 'react-router-dom';
import TriviaApp from './App';
import { Provider } from 'redux-zero/react';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";

const Trivia = () => (
	<Provider store={store}>
		<TriviaApp />
	</Provider>
);

// const Index = () => (
//   <Provider store={store}>
//      <HashRouter>
//         <Switch>
//            <Route path="/" component={App} />
//         </Switch>
//      </HashRouter>
//   </Provider>
// );

ReactDOM.render(<Trivia/>, document.getElementById('root'));
registerServiceWorker();
