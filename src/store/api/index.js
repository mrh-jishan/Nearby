const axios = require('axios').default
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = 'https://aqueous-garden-41429.herokuapp.com'

const GET = async (url) => {
    const { data } = await axios.get(url).then(res => res).catch(err => err.response);
    return data;
}

const POST = async (url, body) => {
    const { data } = await axios.post(url, body).then(res => res).catch(err => err.response);
    return data;
}

const googleAuth = async (body) => {
    return await POST('/google_auth', body);
}

const register = async (body) => {
    return await POST('/auth', body);
}

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@session', jsonValue)
    } catch (e) {
        throw Error('Unable to store data');
    }
}

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@session')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        throw Error('Unable to get data');
    }
}

const removeData = async () => {
    try {
        await AsyncStorage.removeItem('@session')
    } catch (e) {
        throw Error('Unable to remove data');
    }
}
export { getData, storeData, removeData, googleAuth, register };

