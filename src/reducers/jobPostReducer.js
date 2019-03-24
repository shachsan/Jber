import actions from '../actions/actionTypes';

const initialState={
    jobCategories:[
        {id:1, category:'Construction'},
        {id:2, category:'House Clean'},
        {id:3, category:'Shopping'},
        {id:4, category:'Car Cleaning'},
        {id:5, category:'Cooking Help'},
    ],

    jobQuestions:{
            jobTitle:'Job Title', //<input type='text'/>],
            description:'Description',//<textarea rows='5'></textarea>],
            category:'Job Category',//<select>{this.getJobCategories()}</select>],
            payRate:'Pay Rate',//<input type='text'/>],
            workHours:'Work Hours',//<input type='text'/>],
            expectCompTime:'Expected Completion Time',//<input type='text'/>],
            screen:'Would you like to add screen questions?',//<button>Yes</button>]
    },
    screenQuestions:[
        'Do you have 1 year of experience?',
        'Can you lift 50+ lb?',
        'Are you available to work in the evening?'
    ],
}

const jobQuestions=(state=initialState, action)=>{
    switch(action.type){
        case actions.JOB_QUESTIONS:
            return{
                ...state,
                jobQuestions:action.payload
            }
        case actions.SCREEN_QUESTIONS:
            return{
                ...state,
                screenQuestions:action.payload
            }

        default:
            return state;
    }
}

export default jobQuestions;