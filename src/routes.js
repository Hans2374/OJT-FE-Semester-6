// Import các thư viện cần thiết
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import các component mà bạn muốn điều hướng tới
import HomePage from './pages/HomePage/home';
import LoginPage from './pages/LoginPage/Login';


// Định nghĩa các route trong ứng dụng
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                {/* Route cho trang không tồn tại */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
