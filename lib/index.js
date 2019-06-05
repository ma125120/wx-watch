let pubSub = require('./pubSub')
let getPage = require('./getPage')
let getUserInfo = require('./getUserInfo')
let watchData = require('./watchData')
const { FAIL } = require('./constant.js');

exports.pubSub = pubSub;
exports.getPage = getPage;
exports.getUserInfo = getUserInfo;
exports.watchData = watchData;
exports.FAIL = FAIL;