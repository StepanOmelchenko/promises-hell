// callBack hell

const https = require('https');
const axios = require('axios');
const url = '';

const arr = [
	{
        doc: 2071,
        desc: 1839,
    },
];
const agent = new https.Agent({  
    rejectUnauthorized: false
});
const access_token = '';

// axios.defaults.headers.common['Authorization'] = `Bearer ${ access_token }`

arr.forEach((item) => {
	axios.get(`${ url }/desc/${ item.desc }/matrixes`, { httpsAgent: agent })
        .then(() => {})
        .catch((error) => {
            console.log(error);
            axios.get(`${ url }/desc/${ item.desc }/description-content`, { httpsAgent: agent })
                .then(() => {})
                .catch((error) => {
                    console.log(error);
                    axios.get(`${ url }/desc/${ item.desc }/description-matrixes`, { httpsAgent: agent })
                        .then(() => {})
                        .catch((error) => {
                            console.log(error);
                            axios.get(`${ url }/docs/${ item.doc }/matrixes`, { httpsAgent: agent })
                                .then(() => {})
                                .catch((error) => {
                                    console.log(error);
                                    axios.get(`${ url }/docs/${ item.doc }/trees`, { httpsAgent: agent })
                                        .then(() => {})
                                        .catch((error) => {
                                            console.log(error);
                                            axios.get(`${ url }/docs/${ item.doc }/constructor-content`, { httpsAgent: agent })
                                                .then(() => {})
                                                .catch((error) => {
                                                    console.log(error);
                                                    axios.get(`${ url }/docs/${ item.doc }/constructor-trees`, { httpsAgent: agent })
                                                        .then(() => {})
                                                        .catch((error) => {
                                                            console.log(error);
                                                            axios.get(`${ url }/docs/${ item.doc }/constructor-matrixes`, { httpsAgent: agent })
                                                                .then(() => {})
                                                                .catch((error) => {
                                                                    console.log(error);
                                                                    console.log(`Запилено ${ item.desc } / ${ item.doc }`);
                                                                })
                                                        })
                                                })
                                        })
                                })
                        })
                })
        })
})




 