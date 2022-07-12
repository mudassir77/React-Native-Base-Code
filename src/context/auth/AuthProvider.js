import React, { useEffect, useState } from 'react';
import { getItemFromStorage, removeItemFromStorage, setItemInStorage, storageDataKeys } from '../../utils/storage';
import AuthContext from './AuthContext';


const AuthProvider = ({ children }) => {
    useEffect(() => {
        //Every time the App is opened, this provider is rendered
        //and call de loadStorageData function.
        loadStorageData();
    }, []);


    const [authData, setAuthData] = useState({
        token: null,
        user: null,
        authorize: false
    });


    //The loading part will be explained in the persist step session
    const [loading, setLoading] = useState(true);

    const loadStorageData = async () => {
        setLoading(false);
        try {
            //Try get the data from Async Storage
            const authDataSerialized = await getItemFromStorage(storageDataKeys.AUTH);
            if (authDataSerialized) {
                //If there are data, it's converted to an Object and the state is updated.
                setAuthData(authDataSerialized);
            }
        } catch (error) {
            console.log("🚀 ~ file: AuthProvider.js ~ line 35 ~ loadStorageData ~ error", error)
        }
        finally {
            //loading finished
            setLoading(false);
        }
    }

    const loginApi = async (payload) => {
        setLoading(true);
        try {
            const _authData = {
                user: {},
                token: "string",
                authorize: true
            }
            await setItemInStorage(storageDataKeys.AUTH, _authData);
            setAuthData(_authData)
        }

        catch (error) {
            console.log("🚀 ~ file: AuthProvider.js ~ line 52 ~ signIn ~ error", error)
        }
        finally {
            setLoading(false);
        }

    };

    const signUpApi = async (payload) => {

        setLoading(true);
        try {
            const _authData = {
                user: {},
                token: "string",
                authorize: true
            }
            await setItemInStorage(storageDataKeys.AUTH, _authData);
            setAuthData(_authData)

        }
        catch (error) {
            console.log("🚀 ~ file: AuthProvider.js ~ line 52 ~ signIn ~ error", error)
        }
        finally {
            setLoading(false);
        }

    };

    const logoutApi = async () => {
        //Remove data from context, so the App can be notified
        //and send the user to the AuthStack
        try {
            await removeItemFromStorage(storageDataKeys.AUTH);
            setAuthData({
                user: {},
                token: null,
                authorize: false
            })
        } catch (error) {
            console.log("🚀 ~ file: AuthProvider.js ~ line 69 ~ signOut ~ error", error)
        }
        finally {
            setLoading(false);
        }
    };

    return (
        //This component will be used to encapsulate the whole App,
        //so all components will have access to the Context
        <AuthContext.Provider value={{ authData, loading, loginApi, logoutApi, signUpApi }}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider