import axios from "axios";

const SET_USERS_DATA = 'SET_USERS_DATA'
const SET_LOGIN = 'SET_LOGIN'
const IS_AUTH = 'IS_AUTH'


const initialState = {
    usersData: [],
    authMe: [],
    isAuth: false
}
const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                usersData: action.usersData
            }
        case SET_LOGIN:
            return {
                ...state,
                authMe: action.user
            }
        case IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}
// ACTIONS
export const setIsAuth = (isAuth) => ({
    type: IS_AUTH,
    isAuth
})
const setLogin = (user) => ({
    type: SET_LOGIN,
    user
})
const setUsersData = (usersData) => ({
    type: SET_USERS_DATA,
    usersData
})

// THUNK

export const logOutThunk = () => async(dispatch) => {
    await axios.delete('http://localhost:3001/authMe/1')
    // Можно сделать action чтобы очищал еще и стате, но так как после запроса сайт перезагрузается
}
export const getAuthMeThunk = () => async (dispatch) => {
    await axios.get(`http://localhost:3001/authMe`)
        .then(response => dispatch(setLogin(response.data)))
}

export const setAuthMeThunk = (email, password) => async(dispatch) => {
   await  axios.post('http://localhost:3001/authMe', {email, password})
}
export const setUsersDataThunk = () => async(dispatch) => {
    await axios.get('http://localhost:3001/usersData')
        .then(response => dispatch(setUsersData(response.data)) )
}



export default loginReducer