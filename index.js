/**
 * User: ct/512799311@qq.com
 * Date: 2018-06-04
 * Time: 上午 9:59
 */

var express = require('express');
var app = express();


app.use(express.static('public'));

var server = app.listen(8000, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log("http://", host, port);

});

