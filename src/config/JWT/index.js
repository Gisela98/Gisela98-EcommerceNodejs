const { expressjwt: jwt } = require('express-jwt');

const config = require('../env');

const JWT_SECRET = config.JWT_SECRET;
const JWT_ALGORITHMS = config.JWT_ALGORITHMS;

const expressJWT = jwt({
    secret: JWT_SECRET,
    algorithms: [JWT_ALGORITHMS],
}).unless({
    path: [ 
        '/v1/auth/signUp',
        '/v1/auth/signIn',
        '/v1/auth/forgotPassword',
        '/v1/auth/newPassword',
        '/favicon.ico',
        '/'
    ],
});

module.exports = expressJWT;