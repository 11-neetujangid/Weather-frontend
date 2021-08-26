
import { Button } from 'react-bootstrap';
import { city } from '../../Actions/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cityname } from '../../Services/api';

const Dashboard = () => {
    const dispatch = useDispatch();
    const ciity = useSelector((state) => state.city);
    console.log(ciity);

    const onValueChange = (e) => {
        dispatch(city({ ...ciity, [e.target.name]: e.target.value }));
    }
    const cityDetails = () => {
        dispatch(cityname(ciity));
        // history.push('/signin')
    }
    return (
        <>
            <h1>Dashboard</h1>
            <form style={{ display: "inline-flex" }}>
                City:<input name="city" type="tesxt" onChange={(e) => onValueChange(e)} placeholder="city name.." /><br></br>
                <Button variant="primary" onClick={() => cityDetails()}>Serach</Button>
            </form>
        </>

    )
}
export default Dashboard