import { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';


const HistoryPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(getHistory());
    }, [])
    return (
        <>
            <h2>History</h2>

            <table style={{ border: "2px solid #ddd" }}>
                <thead style={{ border: "1px solid #ddd" }}>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>city</th>
                    </tr>
                </thead>
            </table>
        </>
    )
}
export default HistoryPage