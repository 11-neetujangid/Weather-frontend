import axios from "axios";
import { signUpUser, SignIn, weatherData, currLocation, setHistoryData } from "../Actions/action";


const url = "http://localhost:7000/users";


export const addUser = (user) => async (dispatch, getState) => {
    console.log(user)
    // return await axios.post(`${url}/add`, user);

    try {
        const response = await axios.post(`${url}/add`, user);
        console.log(response.data);
        dispatch(signUpUser(response.data));

    } catch (err) {
        console.log(err);
    }

}

// signin users-->
export const loginUser = (user) => async (dispatch, getState) => {
    console.log(user)
    // console.log(datetime)

    try {
        const response = await axios.post(`${url}/signin`, user);
        console.log(response.data);
        dispatch(SignIn(response.data));

    } catch (err) {
        console.log(err);
    }
}
export const cityname = (city, email) => async (dispatch, getState) => {
    console.log(city, email);
    console.log(`${url}/city/?city=${city}&email=${email}`);
    try {
        const response = await axios.get(`${url}/city/?city=${city}&email=${email}`);
        console.log(response.data);
        dispatch(weatherData(response.data));

    } catch (err) {
        console.log(err);
    }
}
export const weather = (lat, long) => async (dispatch, getState) => {
    console.log(lat, long);
    console.log(`${url}/weather/?lat=${lat}/&long=${long}`);
    try {
        const response = await axios.get(`${url}/weather/?lat=${lat}&long=${long}`);
        console.log(response.data);
        dispatch(currLocation(response.data));

    } catch (err) {
        console.log(err);
    }
}

export const getHistoryData = (email) => async (dispatch, getState) => {
    console.log(email)
    console.log(`${url}/history/${email}`)
    try {
        const response = await axios.get(`${url}/history/${email}`);
        console.log(response.data)
        dispatch(setHistoryData(response.data));

    } catch (err) {
        console.log(err);
    }
}