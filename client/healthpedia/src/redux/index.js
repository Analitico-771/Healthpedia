
import actionTypes from './actionTypes';
import axios from 'axios';
/**
 * Registration action
 */
export const signUp = (formData, cb) => async dispatch => {
    try{
        console.log(formData);
        //take formdata: email, password
        //call our server api: /register
        let response = await axios.post('/register', formData);
        console.log(response.data.token);
        //wait for an authentication token
        //call reducer to store token
        dispatch({
            type: actionTypes.authUser, 
            data: response.data.token
        })
        //invoking function to redirect user to feature page
        cb();
    }
    catch(err){
        console.log("error message", err);
    }
}
/**
 * Login
 */
export const signIn = (formData, cb) => async dispatch => {
    try{
            //make api call : /login
            let response = await axios.post('/login', formData);
            dispatch({
                type: "AUTH_USER",
                data: response.data.token
            })
            //invoking function to redirect user to feature page
            cb()
    }
    catch(err){
    }
}
/**
 * Logout
 */
export const signOut = (cb) => dispatch => {
    dispatch({
        type: "AUTH_USER", 
        data: ""
    })
    cb();
}
/**
 * add subjectData
 */
export const addSubjectData = (data) => {
    return(
        {
            type: "ADD_SUBJECT_INFO", 
            payload: data
        }
    )

}
/**
 * add Favorite
 */
export const addFavorite = (data) => {
    console.log("payload data", data)
    return(
        {
            type: "ADD_FAVORITE", 
            payload: data
        }
    )
}