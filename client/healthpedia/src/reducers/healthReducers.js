
import actionTypes from '../actions/actionTypes';

const initialState = {
   auth: ""
}
const reducerTemplate = (state = initialState, action) => {
    switch(action.type){
        case "AUTH_USER":
            return {
                ...state,
                auth: action.data
            }
        default:
            return state;
    } 
}
export default reducerTemplate