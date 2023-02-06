import { useEffect } from "react";
import Home from "../components/Home";
import { useDispatch } from 'react-redux';
import { login } from '../redux';
import axios from "axios";

const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('access_token'),
        };

        axios.get('http://localhost:5000/', { headers : headers })
        .then(res => {
            dispatch(login(res.data));
        })
        .catch(err => {
            console.log(err.message);
        });
    },[])

    return (
        <Home/>
    )
}

export default HomePage;