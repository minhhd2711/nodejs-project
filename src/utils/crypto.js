var sha256 = require('js-sha256');
var md5 = require('md5');

const generatePassword = (originPassword) => {
    return md5(md5(sha256(originPassword)))
}

module.exports = {
    generatePassword
}