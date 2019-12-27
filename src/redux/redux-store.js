import { combineReducers, createStore } from 'redux';
import newsDataReducer from './newsData-reducer';
import articlesDataReducer from './articlesData-reducer';
import interviewDataReducer from './interviewData-reducer';

const reducers = combineReducers({
  newsData: newsDataReducer,
  articlesData: articlesDataReducer,
  interviewData: interviewDataReducer,
});

const store = createStore(reducers);

export default store;
