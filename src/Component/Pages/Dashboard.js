import { Button } from 'react-bootstrap';
import { city, weatherLocation} from '../../Actions/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cityname , weather} from '../../Services/api';
import { useHistory } from 'react-router';

const Dashboard = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const ciity = useSelector((state) => state.city);
    console.log(ciity);

    const data = useSelector((state) => state.data);
    console.log(data);
    const email = localStorage.getItem("email");


    const onValueChange = (e) => {
        dispatch(city({ [e.target.name]: e.target.value }));
    }
    const onSubmit = () => {
        dispatch(cityname(ciity, email));
        // history.push('/dashboard')
    }
    const onClickLocation = () => {
        console.log("location")
        if (!navigator.geolocation) {
            console.log("geolocation is not available")

        } else {
            navigator.geolocation.getCurrentPosition((position) => {
              const lat =  position.coords.latitude;
              const long =  position.coords.longitude
                console.log("Latitude is :", lat)
                console.log("Longitude is :", long)
                dispatch(weather(lat,long))
            })
        }
    }

    return (
        <>
            <h1>Dashboard</h1>
            <form style={{ display: "inline-flex" }}>
                City:<input name="city" type="tesxt" onChange={(e) => onValueChange(e)} placeholder="city name.." /><br></br>
                <Button variant="primary" onClick={() => onSubmit()}>Serach</Button>
            </form>
            <div><br/>
                <Button variant="primary" type="submit" onClick={() => onClickLocation()}> Current Location</Button>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>main</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                        data.map((record) =>
                        <tr key={record.id}>
                            
                         <td>{record.id}</td>
                         <td>{record.main}</td>
                         <td>{record.description}</td>

                        </tr>
                    )} 
                    </tbody>

                </table>

            </div>
        </>

    )
}
export default Dashboard