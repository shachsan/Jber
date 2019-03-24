import actions from '../actions/actionTypes';

const initialState={
    employers:[],
}

const employers = (state=initialState, action) => {
    switch (action.type) {
        case actions.registerNewEmployer:
            return{
                ...state,
                employers:[...state.employers, action.payload]
            }
            
        default:
            return state;
    }
}
 
export default employers;

