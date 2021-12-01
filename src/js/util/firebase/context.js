import React, { createContext, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';

import { userAction } from '../../store';

export const FirebaseContext = createContext();
export const AuthContext = createContext();

export function FirebaseProvider({ children }) {

    const firebase = initializeApp(firebaseConfig);

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    );
}

export function AuthProvider({ children }) {

    const { user } = useSelector(state => state.dataState);
    const dispatch = useDispatch();
    const auth = getAuth();
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user && user.emailVerified) {
                dispatch(userAction.setUser(user));
            } 
            else if (user && !user.emailVerified) {
                // User is not verified
            }
            else if (!user) {
                // No user
            }
        });
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}