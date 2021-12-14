

import { useLocation, Navigate} from "react-router";

const RequireAuth = ({children}: any) => {
    const location = useLocation();
    const auth = false;

    if (!auth) {
        return <Navigate to='/login' />
    }
}

export {RequireAuth};