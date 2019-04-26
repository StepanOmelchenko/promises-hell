// callBack hell

const https = require('https');
const axios = require('axios');
const url = 'https://arman.dev.dogovor24.ru';

const arr = [];
const agent = new https.Agent({  
    rejectUnauthorized: false
});
const access_token = '';
// axios.defaults.headers.common['Authorization'] = `Bearer ${ access_token }`

const gen = generator(arr);

promisesHell(gen.next());

function generator(arr) {
    let i = -1;

    return {
        next() {
            i++;
            if (arr[i]) {
                return arr[i];
            } else {
                return null;
            }
        }
    }
}

function promisesHell(item) {
    console.log(`start: `, item);
    axios.get(`${ url }/desc/${ item.desc }/matrixes`, { httpsAgent: agent })
        .then(() => {
            //console.log('desc - matrixes - 200');
        })
        .catch((error) => {
            console.log('error: ', item);
            //console.error(error);
        })
        .then(() => {
            axios.get(`${ url }/desc/${ item.desc }/description-content`, { httpsAgent: agent })
                .then(() => {
                    //console.log('desc - description-content - 200');
                })
                .catch((error) => {
                    console.log('error: ', item);
                    //console.error(error);
                })
                .then(() => {
                    axios.get(`${ url }/desc/${ item.desc }/description-matrixes`, { httpsAgent: agent })
                        .then(() => {
                            //console.log('desc - description-matrixes - 200');
                        })
                        .catch((error) => {
                            console.log('error: ', item);
                            //console.error(error);
                        })
                        .then(() => {
                            axios.get(`${ url }/docs/${ item.doc }/matrixes`, { httpsAgent: agent })
                                .then(() => {
                                    //console.log('docs - matrixes - 200');
                                })
                                .catch((error) => {
                                    console.log('error: ', item);
                                    //console.error(error);
                                })
                                .then(() => {
                                    axios.get(`${ url }/docs/${ item.doc }/trees`, { httpsAgent: agent })
                                        .then(() => {
                                            //console.log('docs - trees - 200');
                                        })
                                        .catch((error) => {
                                            console.log('error: ', item);
                                            //console.error(error);
                                        })
                                        .then(() => {
                                            axios.get(`${ url }/docs/${ item.doc }/constructor-content`, { httpsAgent: agent })
                                                .then(() => {
                                                    //console.log('docs - constructor-content - 200');
                                                })
                                                .catch((error) => {
                                                    console.log('error: ', item);
                                                    //console.error(error);
                                                })
                                                .then(() => {
                                                    axios.get(`${ url }/docs/${ item.doc }/constructor-trees`, { httpsAgent: agent })
                                                        .then(() => {
                                                            //console.log('docs - constructor-trees - 200');
                                                        })
                                                        .catch((error) => {
                                                            console.log('error: ', item);
                                                            //console.error(error);
                                                        })
                                                        .then(() => {
                                                            axios.get(`${ url }/docs/${ item.doc }/constructor-matrixes`, { httpsAgent: agent })
                                                                .then(() => {
                                                                    //console.log('docs - constructor-matrixes - 200');
                                                                })
                                                                .catch((error) => {
                                                                    console.log('error: ', item);
                                                                    //console.error(error);
                                                                })
                                                                .then(() => {
                                                                    axios.get(`${ url }/docs/${ item.doc }/content-relations`, { httpsAgent: agent })
                                                                        .then(() => {
                                                                            //console.log('docs - content-relations - 200');
                                                                        })
                                                                        .catch((error) => {
                                                                            console.log('error: ', item);
                                                                            //console.error(error);
                                                                        })
                                                                        .then(() => {
                                                                            console.log('end:   ', item);
                                                                            let next = gen.next();
                                                                            if (next) {
                                                                                promisesHell(next);
                                                                            }
                                                                        })
                                                                })
                                                        })
                                                })
                                        })
                                })
                        })
                })
        })
}
