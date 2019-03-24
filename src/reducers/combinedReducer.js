import { combineReducers } from "redux";
import employers from './employerReducer';
import jobQuestions from './jobPostReducer';

const combinedReducer = combineReducers({
    employers,
    jobQuestions,
})
export default combinedReducer;