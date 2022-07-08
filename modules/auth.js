'use strict';

//jwt - JSON web token
const jwt = require('jsonwebtoken');

//jwks - JSON web key set
const jwksClient = require('jwks-rsa');

//JWKS URI comes from auth0 acct page --> advanced settings --> endpoints -> 0Auth -> json webkey set

const client = jwksClient({
  jwksUri: process.env.JWKS_URI
});

// need a getKey function to make the key readable
//from npm jsonwebtoken docs: https://www.npmjs.com/package/jsonwebtoken 
function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};

// function to verify user on our route has the right to make the request.

function verifyUser(req, errorFirstOrUseTheUserCallbackFunction) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    // console.log(token);
    // from json web token docs:
    jwt.verify(token, getKey, {}, errorFirstOrUseTheUserCallbackFunction);
  } catch (error) {
    errorFirstOrUseTheUserCallbackFunction('not authorized');
  }
};

module.exports = verifyUser;
