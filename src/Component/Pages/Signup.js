import { Button } from "react-bootstrap"
import { signUpUser } from "../../Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Services/api";
import { useHistory } from "react-router";
const Signup = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const register = useSelector(state => state.register);
    console.log(register);

    const onValueChange = (e) => {
        dispatch(signUpUser({ ...register, [e.target.name]: e.target.value }));
    }
    const addUserDetails = () => {
        dispatch(addUser(register));
        history.push('/signin')
    }

    return (
        <div>
            <h2 >SignUP Page</h2>

            <form onSubmit={() => addUserDetails()}>
                Name:<input name="name" type="text" onChange={(e) => onValueChange(e)} /><br></br>
                Email <input name="email" type="email" onChange={(e) => onValueChange(e)} /><br></br>
                city<input name="city" type="text" onChange={(e) => onValueChange(e)} /><br></br>
                field<input name="field" type="text" onChange={(e) => onValueChange(e)} /><br></br>
                Password<input name="password" type="password" onChange={(e) => onValueChange(e)} /><br></br>
                <Button variant="primary" onClick={() => addUserDetails()}>Sign Up</Button>
            </form>
        </div>
    )
}
export default Signup