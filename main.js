// callBack hell

const https = require('https');
const axios = require('axios');
const url = '';

const arr = [
	{
        doc: 2022,
        desc: 1788
    },
];
const agent = new https.Agent({  
    rejectUnauthorized: false
});

arr.forEach((item) => {
	axios.get(`${ url }/desc/${ item.desc }/matrixes`, { httpsAgent: agent })
        .then(() => {})
        .catch((error) => {
            axios.get(`${ url }/desc/${ item.desc }/description-content`, { httpsAgent: agent })
                .then(() => {})
                .catch((error) => {
                    axios.get(`${ url }/desc/${ item.desc }/description-matrixes`, { httpsAgent: agent })
                        .then(() => {})
                        .catch((error) => {
                            axios.get(`${ url }/docs/${ item.doc }/matrixes`, { httpsAgent: agent })
                                .then(() => {})
                                .catch((error) => {
                                    axios.get(`${ url }/docs/${ item.doc }/trees`, { httpsAgent: agent })
                                        .then(() => {})
                                        .catch((error) => {
                                            axios.get(`${ url }/docs/${ item.doc }/constructor-content`, { httpsAgent: agent })
                                                .then(() => {})
                                                .catch((error) => {
                                                    axios.get(`${ url }/docs/${ item.doc }/constructor-trees`, { httpsAgent: agent })
                                                        .then(() => {})
                                                        .catch((error) => {
                                                            axios.get(`${ url }/docs/${ item.doc }/constructor-matrixes`, { httpsAgent: agent })
                                                                .then(() => {})
                                                                .catch((error) => {
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




 