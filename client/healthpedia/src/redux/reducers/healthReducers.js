
import actionTypes from '../actionTypes';

const initialState = {
   auth: "",
   favorites: [{
    apiId: "",
    type: "",
    title: ""
   }],
   journalEntries: [],
   subjectInfo: []

}
const reducers = (state = initialState, action) => {
    console.log("state", state)
    switch(action.type){
        case actionTypes.authUser:
            return {
                ...state,
                auth: action.data
            }

        case actionTypes.addFavorite:
            console.log("action data", action.payload)//undefined
            console.log("state.favorites", state.favorites)
            var favoritesCopy = state.favorites.slice();
            console.log("favorite copy", favoritesCopy);
            favoritesCopy.push(action.payload)
            return {
                ...state,
                favorites: favoritesCopy
            }

        // case actionTypes.addJournalEntries:
        //     var journalEntriesCopy = state.journalEntries;
        //     journalEntriesCopy.push(action.data)
        //     return {
        //         ...state,
        //         journalEntries: journalEntriesCopy  
        //     }

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