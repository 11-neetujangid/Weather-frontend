import axios from "axios";
import { signUpUser, signInUser, SignIn } from "../Actions/action";


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
export const cityname= (user) => async (dispatch, getState) => {
    console.log(user)
    try {
        const response = await axios.post(`${url}/city`, user);
        console.log(response.data);
        dispatch(SignIn(response.data));

    } catch (err) {
        console.log(err);
    }
}