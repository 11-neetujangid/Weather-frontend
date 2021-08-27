import { useSelector } from "react-redux"
import { Nav, Navbar } from "react-bootstrap";


const NavLinks = () => {

    const token = useSelector((state) => state.token);
    return (
        <div>
            {!token ?
                (
                    <Navbar bg="dark" variant="dark">
                        <Nav className="me-auto" >
                            <Nav className="me-auto" ></Nav>
                            <Nav.Link href='/'>Sign Up</Nav.Link>
                            <Nav.Link href='/signin'>Signin In</Nav.Link>
                        </Nav>
                    </Navbar>
                )
                : (
                    <Navbar bg="dark" variant="dark">
                        <Nav className="me-auto" >
                            <Nav.Link href='/dashboard'>DashBoard</Nav.Link>
                            <Nav.Link href='/history'>History</Nav.Link>
                            <Nav.Link href='/logout'>Logout</Nav.Link>
                        </Nav>
                    </Navbar>
                )
            }
        </div>
    )
}
export default NavLinks