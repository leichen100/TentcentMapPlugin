var exec = require('cordova/exec');

exports.getTencentLocation = function (successCallback,errorCallback,apikey) {
     exec(successCallback, errorCallback, 'TencentMap', 'getTencentLocation', [apikey]);
};
