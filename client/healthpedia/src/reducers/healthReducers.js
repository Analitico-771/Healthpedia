
import actionTypes from '../actions/actionTypes';

const initialState = {
   auth: "",
   favorites: [],
   journalEntries: []

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

        default:
            return state;
    } 
}
export default reducers