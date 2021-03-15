const axios = require('axios').default

axios.defaults.baseURL = 'https://aqueous-garden-41429.herokuapp.com'

const GET = async (url) => {
    const { data } = await axios.get(url).then(res => res).catch(err => err.response);
    return data;
}

const POST = async (url, body) => {
    const { data } = await axios.post(url, body).then(res => res).catch(err => err.response);
    return data;
}


export { GET, POST };

