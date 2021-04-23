import AsyncStorage from '@react-native-async-storage/async-storage';

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
    return jsonValue != null ? JSON.parse(jsonValue) : {};
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


const LocalStorage = (() => {
  return {
    store: (value) => storeData(value),
    get: () => getData(),
    remove: () => removeData(),
  };
})();

export default LocalStorage;
