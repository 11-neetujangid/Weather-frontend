import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "../../Actions/action";
import { useHistory } from "react-router";

const Logout = () => {

    const dispatch = useDispatch();
    const history = useHistory();
   
    useEffect(() =>{
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        dispatch(userLogout());
        history.push('/signin')
    },[])
    return (
        <h2>Logout</h2>
    )
}
export default Logout;