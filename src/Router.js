import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProtectedRoutes from 'components/ProtectedRoute';
import LandingScreen from 'screens/LandingScreen';
import LoginScreen from 'screens/LoginScreen';
import ForgotPasswordScreen from 'screens/ForgotPasswordScreen';
import RegisterScreen from 'screens/RegisterScreen';
import ProfileScreen from 'screens/ProfileScreen';
import AuthScreen from 'screens/AuthScreen';
import PrivacyScreen from 'screens/PrivacyScreen';
import TermsScreen from 'screens/TermsScreen';
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/terms-conditions" element={<TermsScreen />} />
                <Route path="/privacy-policy" element={<PrivacyScreen />} />
                
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route element={<ProtectedRoutes />}>
                    <Route element={<AuthScreen />}>
                        <Route path="/profile" element={<ProfileScreen />} />

                        
                    </Route>
                </Route>
                <Route path="/" element={<LandingScreen />} />
            </Routes>
        </BrowserRouter>
    );
}
