import actions from './actionTypes';

export const registerNewEmployer=(newEmployer)=>({type:actions.REGISTER_NEW_EMPLOYER, payload:newEmployer})
export const getNewJobQuestions=(questions)=>({type:actions.JOB_QUESTIONS, payload:questions})
export const getScreenQuestions=(questions)=>({type:actions.SCREEN_QUESTIONS, payload:questions})