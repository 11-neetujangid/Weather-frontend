export const SIGNUP_USERS = "SIGNUP_USERS";
export const SIGNIN_USERS = "SIGNIN_USERS";
export const SIGNIN = "SIGNIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const CITY_NAME = "CITY_NAME"
export const WEATHER_DATA = "WEATHER_DATA";
export const CURR_LOCATION = "CURR_LOCATION";
export const SET_HISTORY_DATA = "SET_HISTORY_DATA";


export const signUpUser = (payload) => ({ type: SIGNUP_USERS, payload: payload });
export const signInUser = (payload) => ({ type: SIGNIN_USERS, payload: payload });

export const SignIn = (payload) => {
    console.log(payload.token, payload.id)
    localStorage.setItem("token", payload.token);
    localStorage.setItem("id", payload.id)
    localStorage.setItem("email", payload.email)
    localStorage.setItem("name", payload.name)
    return { type: SIGNIN, payload }
}


export const userLogout = (payload) => ({ type: USER_LOGOUT, payload: payload });

export const city = (payload) => ({ type: CITY_NAME, payload: payload });

export const weatherData = (payload) => (console.log(payload), { type: WEATHER_DATA, payload: payload });

export const currLocation = (payload) => (console.log(payload), { type: CURR_LOCATION, payload: payload });

export const setHistoryData = (payload) => (console.log(payload), { type: SET_HISTORY_DATA, payload: payload });