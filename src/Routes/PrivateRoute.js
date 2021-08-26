
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";


export const PrivateRoute = ({component: Component, ...rest }) => {
    const token = useSelector(state => state.token);
    return (
        <Route
            {...rest}
            render={props => (
                token ?
                    (<Component {...rest} {...props} />) :
                    (<Redirect to = "/signin" />)
            )}
        />
    );
};
