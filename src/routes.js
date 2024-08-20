// routes.js (hoặc AppRoutes.js tùy theo tên bạn sử dụng)
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './screen/HomeScreen/Home';
import LoginPage from './screen/LoginScreen/Login';
import HomeAdmin from './screen/HomeAdminScreen/HomeAdmin';
import { selectUser } from './features/userSlice';

const AppRoutes = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    useEffect(() => {
        if (user) {
            if (user.role === 'admin') {
                navigate('/homeadmin');
            } else if (user.role === 'intern') {
                navigate('/home');
            }
        }
    }, [user, navigate]);

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/homeadmin" element={<HomeAdmin />} />
        </Routes>
    );
};

export default AppRoutes;
