import { useEffect, useState } from 'react'
import { Alert, Linking, PermissionsAndroid, Platform, ToastAndroid } from 'react-native'
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';


import appConfig from '../../app.json'
import Config from '../Config';
export const LOCATION_STATUS = {
    GRANTED: 1,
    DENIED: 2
}

Geocoder.init(Config.env().GOOGLE_GEOCODING_API_KEY);

const useLocation = () => {

    useEffect(() => {
        getLocation()
    }, [])

    const [locationData, setLocationData] = useState({
        status: null,
        location: {},
        formattedAddress: ""
    })
    const [locationFetching, setLocationFetching] = useState(false)

    const hasPermissionIOS = async () => {
        const openSetting = () => {
            Linking.openSettings().catch(() => {
                Alert.alert('Unable to open settings');
            });
        };
        const status = await Geolocation.requestAuthorization('whenInUse');

        if (status === 'granted') {
            return true;
        }

        if (status === 'denied') {
            Alert.alert('Location permission denied');
        }

        if (status === 'disabled') {
            Alert.alert(
                `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,
                '',
                [
                    { text: 'Go to Settings', onPress: openSetting },
                    { text: "Don't Use Location", onPress: () => { } },
                ],
            );
        }
        return false;
    };

    const hasLocationPermission = async () => {
        if (Platform.OS === 'ios') {
            const hasPermission = await hasPermissionIOS();
            return hasPermission;
        }

        if (Platform.OS === 'android' && Platform.Version < 23) {
            return true;
        }

        const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (status === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
        }

        if (status === PermissionsAndroid.RESULTS.DENIED) {
            ToastAndroid.show(
                'Location permission denied by user.',
                ToastAndroid.LONG,
            );
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            ToastAndroid.show(
                'Location permission revoked by user.',
                ToastAndroid.LONG,
            );
        }

        return false;
    };

    const getAddressFromCoordinates = async (position) => {
        try {
            const { coords } = position;
            let response = await Geocoder.from(coords.latitude, coords.longitude);
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    const getLocation = async () => {
        setLocationFetching(true)
        return new Promise(async (resolve, reject) => {
            try {
                const hasPermission = await hasLocationPermission();

                if (!hasPermission) {
                    setLocationFetching(false);
                    let preparedData = {
                        ...locationData,
                        status: LOCATION_STATUS.DENIED,
                        location: null
                    }
                    setLocationData(preparedData)
                    resolve(preparedData)
                    return;
                }

                Geolocation.getCurrentPosition(async (position) => {
                    setLocationFetching(false);
                    let geoCodingResponse = await getAddressFromCoordinates(position)
                    let formattedAddress = geoCodingResponse.results[0].formatted_address;
                    let preparedData = {
                        ...locationData,
                        status: LOCATION_STATUS.GRANTED,
                        location: position,
                        formattedAddress
                    }
                    setLocationData(preparedData)
                    resolve(preparedData);


                },
                    (error) => {
                        setLocationFetching(false);
                        let preparedData = {
                            ...locationData,
                            status: LOCATION_STATUS.DENIED,
                            error
                        }
                        setLocationData(preparedData)
                        reject(preparedData)
                    },
                    {
                        accuracy: {
                            android: 'high',
                            ios: 'best',
                        },
                        enableHighAccuracy: true,
                        timeout: 15000,
                        maximumAge: 10000,
                        distanceFilter: 0,
                    },
                );
            } catch (e) {
                reject(e)
                setLocationFetching(false);
            }

        })
    };

    return {
        getLocation,
        locationData,
        locationFetching
    }

}

export default useLocation

