import API from ".";

export const Explore = (params) => {
    console.log('explore body: ', params);
    return API.get('/api/explores', { params: params })
        .then(res => {
            console.log('res: ', res);
            return res.data;
        }).catch(err => {
            console.log('err', err);
            return err
        })
}