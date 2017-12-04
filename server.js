var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var serverPort = 3000;
var exec = require('child_process').exec;
var dumper = require('./helpers/dumper')();
var dbStat = require('./helpers/dbStat')();
var fetchDbList = require('./helpers/fetchDbList')();
var path = require('path');
var bodyParser = require('body-parser');

global.server = app.listen(serverPort, () => {
    console.log('Listening to port ' + serverPort);
});

global.io = require('socket.io').listen(global.server);

app.use(express.static(path.join(__dirname, "public")));
app.get('/dumper', function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});

app.use(bodyParser.json({
    limit: global.bodyParserLimit
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: global.bodyParserLimit
}));

app.post('/fetchDbList', (req, res) => {
    var data = req.body;
    fetchDbList.handle(data, function(resp) {
        resp ? io.emit('logs', { type: 'success', operation: 'Databases fetched from ' + data.url, time: new Date().getTime() }) : io.emit({ type: 'fail', operation: 'Cannot fetch databases from ' + data.url, time: new Date().getTime() });
        res.send(resp);
    });
});

app.post('/backupDb', (req, res) => {
    dumper.dumper(req.body, function() {
        res.send(true);
    })
});