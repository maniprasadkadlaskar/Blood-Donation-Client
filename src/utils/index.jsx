import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    const user = useSelector((state) => state.user.value);
    
    return user ? <Outlet/> : <Navigate to="/login" replace={true}/>
}

export default PrivateRoutes;