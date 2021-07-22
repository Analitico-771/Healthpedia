
import actionTypes from '../actions/actionTypes';

const initialState = {
   auth: "",
   favorites: [{
       id: "",
       type: "",
       title: "",
   }],
   journalEntries: [],
   subjectInfo: []

}
const reducers = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.authUser:
            return {
                ...state,
                auth: action.data
            }

        case actionTypes.addFavorite:
            var favoritesCopy = state.favorites;
            favoritesCopy.push(action.data)
            return {
                ...state,
                favorites: favoritesCopy
            }

        case actionTypes.addJournalEntries:
            var journalEntriesCopy = state.journalEntries;
            journalEntriesCopy.push(action.data)
            return {
                ...state,
                journalEntries: journalEntriesCopy  
            }

        case actionTypes.addSubjectInfo:
            return {
                ...state,
                subjectInfo: action.payload  
            }

        default:
            return state;
    } 
}

export default reducers