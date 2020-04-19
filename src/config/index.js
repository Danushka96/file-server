module.exports = Object.freeze({
    BASEURL: (process.env.NODE_ENV === 'development') ? 'http://localhost:8099' : 'http://192.168.1.4:8099'
});
