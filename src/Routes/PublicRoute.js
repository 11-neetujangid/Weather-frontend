import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";


export const PublicRoute = ({ component: Component, ...rest }) => {
    const token = useSelector(state => state.token);
    return (
        <Route {...rest} render={(props) =>
            token ? (<Redirect to ="/dashboard" />) : (<Component {...rest} {...props} />)
        }
        />
    );
};
