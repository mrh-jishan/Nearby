import API from ".";

export const Login = (body) => {
    return API.post('/sessions', body).then(res => {
        console.log('res: ', res);
        return res.data;
    }).catch(err => {
        console.log('err', err);
        return err
    })
}

export const GoogleAuth = (body) => {
    return API.post('/google_auth', body).then(res => {
        console.log('res: ', res);
        return res.data;
    }).catch(err => {
        console.log('err', err);
        return err;
    })
}