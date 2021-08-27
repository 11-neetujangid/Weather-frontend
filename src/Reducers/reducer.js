import {
    SIGNIN, SIGNIN_USERS, SIGNUP_USERS, USER_LOGOUT, CITY_NAME, WEATHER_DATA,
    CURR_LOCATION,
    SET_HISTORY_DATA
} from "../Actions/action"


const initialState = {

    register: {
        name: '',
        email: '',
        city: '',
        field: '',
        password: '',
    },
    login: {
        email: '',
        password: '',
    },
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("id"),
    name: localStorage.getItem("name"),
    email: localStorage.getItem('email'),

    city: '',
    data: [],
    location: [],
    history: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USERS:
            console.log('register');
            console.log(action.payload)
            return {
                ...state,
                register: action.payload,
            }
        case SIGNIN_USERS:
            console.log("signin data", action.payload);
            return {
                ...state,
                login: action.payload,
            }
        case SIGNIN:
            console.log('login');
            console.log(action.payload)
            console.log(action.payload.name)
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.id,
                name: action.payload.name,
            }
        case USER_LOGOUT:
            return {
                ...state,
                token: null,
            }

        case CITY_NAME:
            console.log('city name');
            console.log(action.payload)
            return {
                ...state,
                city: action.payload.city,
            }
        case WEATHER_DATA:
            console.log('weather data');
            console.log(action.payload)
            return {
                ...state,
                data: action.payload,
            }
        case CURR_LOCATION:
            console.log('current loaction', action.payload);
            return {
                ...state,
                location: action.payload,

            }
        case SET_HISTORY_DATA:
            console.log('history data', action.payload);
            return {
                ...state,
                history: action.payload,

            }
        default:
            return state;
    }
}
export default reducer