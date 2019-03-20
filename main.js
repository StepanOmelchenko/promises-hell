// callBack hell

const https = require('https');
const axios = require('axios');
const url = 'https://arman.dev.dogovor24.ru';

const arr = [
    {
    doc: 2149,
    desc: 1882
    },
    {
    doc: 2289,
    desc: 2021
    },
    {
    doc: 2309,
    desc: 2050
    },
    {
    doc: 2341,
    desc: 2072
    },
    {
    doc: 2241,
    desc: 1970
    },
    {
    doc: 2570,
    desc: 2254
    },
    {
    doc: 2849,
    desc: 2577
    },
    {
    doc: 2340,
    desc: 2070
    },
    {
    doc: 2730,
    desc: 2466
    },
    {
    doc: 2243,
    desc: 1972
    },
    {
    doc: 2754,
    desc: 2484
    },
    {
    doc: 1746,
    desc: 1801
    },
    {
    doc: 2127,
    desc: 1865
    },
    {
    doc: 2415,
    desc: 2144
    },
    {
    doc: 2416,
    desc: 2145
    },
    {
    doc: 2735,
    desc: 2419
    },
    {
    doc: 2677,
    desc: 2416
    },
    {
    doc: 2292,
    desc: 2028
    },
    {
    doc: 2207,
    desc: 1929
    },
    {
    doc: 2250,
    desc: 1982
    },
    {
    doc: 2981,
    desc: 2710
    },
    {
    doc: 2227,
    desc: 1955
    },
    {
    doc: 2275,
    desc: 2010
    },
    {
    doc: 2276,
    desc: 2011
    },
    {
    doc: 2277,
    desc: 2012
    },
    {
    doc: 2278,
    desc: 2013
    },
    {
    doc: 2399,
    desc: 2128
    },
    {
    doc: 2753,
    desc: 2483
    },
    {
    doc: 2279,
    desc: 2015
    },
    {
    doc: 2230,
    desc: 1957
    },
    {
    doc: 2280,
    desc: 2014
    },
    {
    doc: 2343,
    desc: 2073
    },
    {
    doc: 2342,
    desc: 2071
    },
    {
    doc: 2419,
    desc: 2148
    },
    {
    doc: 2357,
    desc: 2069
    },
    {
    doc: 2344,
    desc: 2074
    },
    {
    doc: 2345,
    desc: 2075
    },
    {
    doc: 2551,
    desc: 2547
    },
    {
    doc: 1834,
    desc: 1642
    },
    {
    doc: 1835,
    desc: 1643
    },
    {
    doc: 2065,
    desc: 1807
    },
    {
    doc: 2413,
    desc: 2142
    },
    {
    doc: 1826,
    desc: 1633
    },
    {
    doc: 1740,
    desc: 1570
    },
    {
    doc: 1728,
    desc: 1563
    },
    {
    doc: 1866,
    desc: 1664
    },
    {
    doc: 2022,
    desc: 1788
    },
    {
    doc: 2423,
    desc: 2152
    },
    {
    doc: 2216,
    desc: 1944
    },
    {
    doc: 2096,
    desc: 1837
    },
    {
    doc: 1868,
    desc: 1668
    },
    {
    doc: 2529,
    desc: 2253
    },
    {
    doc: 2029,
    desc: 1772
    },
    {
    doc: 1870,
    desc: 1666
    },
    {
    doc: 1838,
    desc: 1644
    },
    {
    doc: 1854,
    desc: 1677
    },
    {
    doc: 1743,
    desc: 1574
    },
    {
    doc: 1742,
    desc: 1573
    },
    {
    doc: 2302,
    desc: 2037
    },
    {
    doc: 2010,
    desc: 1778
    },
    {
    doc: 2090,
    desc: 1825
    },
    {
    doc: 2397,
    desc: 2126
    },
    {
    doc: 2015,
    desc: 1771
    },
    {
    doc: 2485,
    desc: 2210
    },
    {
    doc: 2013,
    desc: 1769
    },
    {
    doc: 2911,
    desc: 2542
    },
    {
    doc: 2016,
    desc: 1832
    },
    {
    doc: 2579,
    desc: 2311
    },
    {
    doc: 2085,
    desc: 1827
    },
    {
    doc: 2081,
    desc: 1823
    },
    {
    doc: 2071,
    desc: 1839
    },
    {
    doc: 2164,
    desc: 1895
    },
    {
    doc: 2822,
    desc: 2546
    },
    {
    doc: 2709,
    desc: 2444
    },
    {
    doc: 2980,
    desc: 2709
    }
    ];
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
    axios.get(`${ url }/desc/${ item.desc }/matrixes`, { httpsAgent: agent })
        .then(() => {
            console.log(item);
            console.log('desc - matrixes - 200');
        })
        .catch((error) => {
            console.error(error);
        })
        .then(() => {
            axios.get(`${ url }/desc/${ item.desc }/description-content`, { httpsAgent: agent })
                .then(() => {
                    console.log(item);
                    console.log('desc - description-content - 200');
                })
                .catch((error) => {
                    console.error(error);
                })
                .then(() => {
                    axios.get(`${ url }/desc/${ item.desc }/description-matrixes`, { httpsAgent: agent })
                        .then(() => {
                            console.log(item);
                            console.log('desc - description-matrixes - 200');
                        })
                        .catch((error) => {
                            console.error(error);
                        })
                        .then(() => {
                            axios.get(`${ url }/docs/${ item.doc }/matrixes`, { httpsAgent: agent })
                                .then(() => {
                                    console.log(item);
                                    console.log('docs - matrixes - 200');
                                })
                                .catch((error) => {
                                    console.error(error);
                                })
                                .then(() => {
                                    axios.get(`${ url }/docs/${ item.doc }/trees`, { httpsAgent: agent })
                                        .then(() => {
                                            console.log(item);
                                            console.log('docs - trees - 200');
                                        })
                                        .catch((error) => {
                                            console.error(error);
                                        })
                                        .then(() => {
                                            axios.get(`${ url }/docs/${ item.doc }/constructor-content`, { httpsAgent: agent })
                                                .then(() => {
                                                    console.log(item);
                                                    console.log('docs - constructor-content - 200');
                                                })
                                                .catch((error) => {
                                                    console.error(error);
                                                })
                                                .then(() => {
                                                    axios.get(`${ url }/docs/${ item.doc }/constructor-trees`, { httpsAgent: agent })
                                                        .then(() => {
                                                            console.log(item);
                                                            console.log('docs - constructor-trees - 200');
                                                        })
                                                        .catch((error) => {
                                                            console.error(error);
                                                        })
                                                        .then(() => {
                                                            axios.get(`${ url }/docs/${ item.doc }/constructor-matrixes`, { httpsAgent: agent })
                                                                .then(() => {
                                                                    console.log(item);
                                                                    console.log('docs - constructor-matrixes - 200');
                                                                })
                                                                .catch((error) => {
                                                                    console.error(error);
                                                                })
                                                                .then(() => {
                                                                    axios.get(`${ url }docs/${ item.doc }/content-relations`, { httpsAgent: agent })
                                                                        .then(() => {
                                                                            console.log(item);
                                                                            console.log('docs - content-relations - 200');
                                                                        })
                                                                        .catch((error) => {
                                                                            console.error(error);
                                                                        })
                                                                        .then(() => {
                                                                            console.log(`Запилено ${ item.doc } / ${ item.desc }`);
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
