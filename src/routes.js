// Import các thư viện cần thiết
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import các component mà bạn muốn điều hướng tới
import HomePage from './screen/HomeScreen/Home';
import LoginPage from './components/LoginPage/Login';


// Định nghĩa các route trong ứng dụng
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<LoginPage />} />
                {/* Route cho trang không tồn tại */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
