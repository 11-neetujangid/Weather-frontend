import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


const NavLinks = () => {

    const token = useSelector((state) => state.token);
    return (
        <div>
            {!token ?
                (
                    <li>
                        <Link to='/'>Sign Up</Link> {' '}
                        <Link to='/signin'>Signin In</Link>
                    </li>
                )
                : (
                    <li>
                        <Link to='/dashboard'>DashBoard</Link><br />
                        <Link to='/logout'>Logout</Link>{' '}

                    </li>
                )
            }
        </div>
    )
}
export default NavLinks