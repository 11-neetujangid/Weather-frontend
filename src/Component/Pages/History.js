import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getHistoryData } from '../../Services/api'


const HistoryPage = () => {

    const dispatch = useDispatch();
    const email = useSelector((state) => state.email)
    console.log(email);

    const historyData = useSelector((state) => state.history)
    console.log(historyData);

    // const dataaa = historyData[0] ? Object.keys(historyData[1]) : []
    // console.log(dataaa);
    useEffect(() => {
        dispatch(getHistoryData(email));
    }, [])

    return (
        <div className="App-header"><br />
            <h2>History</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>email</th>
                        <th>city</th>
                        <th>Date_Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        historyData.map((record) =>
                            <tr key={record.id} >
                                <td>{record.email}</td>
                                <td>{record.city}</td>
                                <td>{record.curTime}</td>

                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}
export default HistoryPage