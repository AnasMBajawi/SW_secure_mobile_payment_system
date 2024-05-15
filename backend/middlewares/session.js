const session = require('express-session');

const configureSession = () => {
    return session({
        secret :'aiVqfuNV5u',
        resave: false,
        saveUninitialized: true
    });
};

module.exports = configureSession;



