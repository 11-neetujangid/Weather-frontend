import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { signInUser } from "../../Actions/action";
import { loginUser } from "../../Services/api";


const Signin = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const login = useSelector((state => state.login));
    console.log(login);


    const onchangeInput = (e) => {
        dispatch(signInUser({ ...login, [e.target.name]: e.target.value }));
        console.log(login)

    }

    const editUserDetails = () => {
        // const curTime  = new Date().toLocaleString();
        // console.log(curTime)
        dispatch(loginUser(login))
        history.push('/dashboard');
    }
    return (
        <div>
            <from>
                <h2>Login Page</h2>

                Email <input name="email" type="email" onChange={(e) => onchangeInput(e)} placeholder="Enter your email id" /><br></br>
                Password<input name="password" type="password" onChange={onchangeInput} placeholder="Enter your password" /><br></br>
                <Button variant="primary" onClick={() => editUserDetails()}>Login</Button>

            </from>
        </div>
    )
}

export default Signin;












