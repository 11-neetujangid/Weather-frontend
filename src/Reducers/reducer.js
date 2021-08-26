import { SIGNIN, SIGNIN_USERS, SIGNUP_USERS, USER_LOGOUT, CITY_NAME } from "../Actions/action"


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

    city: ''
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
                city: action.payload,
            }
        default:
            return state;
    }
}
export default reducer