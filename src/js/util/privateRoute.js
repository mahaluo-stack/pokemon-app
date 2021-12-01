import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function PrivateRoute({ children }) {

    const { user } = useSelector(state => state.dataState);

    return user && user.emailVerified ? children : <Navigate to="/home" />;
}