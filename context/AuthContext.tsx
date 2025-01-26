import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// storage
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
    id_user: number;
    id_siswa: number;
    email: string;
    nama: string;
    foto: string;
    menu: any;
    token: string;
    list_anak: any;
    fid: string;
    nis: string;
    nisn: string;
    saldo: number;
    limit_pembelian: number;
}

interface AuthContextType {
    authenticated: boolean;
    user: User;
    logout: () => Promise<void>;
    updateUser: (updatedUser: User) => Promise<void>;
    setAuthenticated: (value: boolean) => void;
    setUser: (value: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    return useContext(AuthContext) as AuthContextType;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({
        id_user: 0,
        id_siswa: 0,
        email: '',
        nama: '',
        foto: '',
        menu: [],
        token: '',
        list_anak: [],
        fid: '',
        nis: '',
        nisn: '',
        saldo: 0,
        limit_pembelian: 0,
    });

    const loadAuthData = async () => {
        try {
            let storedUser = await AsyncStorage.getItem('user');

            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
        } catch (error) {
            setAuthenticated(false);
        }
    };

    const logout = async () => {
        await AsyncStorage.removeItem('user');
        setAuthenticated(false);
    };

    const updateUser = async (updatedUser: typeof user) => {
        setUser(updatedUser);
        await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
    };

    useEffect(() => {
        loadAuthData();
    }, []);

    return (
        <AuthContext.Provider value={{
            authenticated,
            setAuthenticated,
            user,
            setUser,
            logout,
            updateUser,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
