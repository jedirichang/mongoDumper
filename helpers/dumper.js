var cmd = require('node-cmd');
var dbStat = require('./dbStat')();
var async = require('async');
module.exports = () => {
    function dumper(req, cb) {
        var command = `mongodump --host ` + req.source.url + ` --port ` + req.source.port;
        var handler = {
            all: function() {
                console.log('Dumping databases');
                global.io.emit('logs', { type: 'success', operation: 'Dumping Database from ' + req.source.url, time: new Date().getTime() })
                cmd.get(
                    command,
                    function(err, data, stderr) {
                        if (!err) {
                            global.io.emit('logs', { type: 'success', operation: 'Database Dumped from ' + req.source.url, time: new Date().getTime() })
                            store(req, function() {
                                validateCount(req);
                                cb(true);
                            });
                        } else {
                            console.log('error', err);
                            cb(false)
                        }
                    }
                )
            },
            selected: function() {
                global.io.emit('logs', { type: 'success', operation: 'Dumping Database from ' + req.source.url, time: new Date().getTime() })
                async.forEachSeries(req.source.dbs, (db, next) => {
                    cmd.get(
                        command + ` --db ` + db,
                        function(err, data, stderr) {
                            next();
                        }
                    )
                }, function() {
                    global.io.emit('logs', { type: 'success', operation: 'Database Dumped from ' + req.source.url, time: new Date().getTime() });
                    store(req, function() {
                        global.io.emit('logs', { type: 'success', operation: 'Database stored from ' + req.source.url + ' to ' + req.destination.url, time: new Date().getTime() });
                        dbStat.countRecords(req, function(resp1) {
                            resp1.status ? global.io.emit('logs', { time: new Date().getTime(), operation: 'Records Transferred! Source(' + req.source.url + '): ' + resp1.sourceRecords + ' -> Destination:(' + req.destination.url + '):  ' + resp1.destinationRecords, type: 'success' }) : global.io.emit('logs', { operation: 'Record Diff of ' + resp1.diff + '. Please try again!!', type: 'fail', time: new Date().getTime() });
                        });
                        cb(true);
                    });
                });
            }
        }
        handler[req.type]();
    }

    function store(req, callback) {
        var command = `mongorestore --host ` + req.destination.url + ` --port ` + req.destination.port + ` dump`;
        cmd.get(command, function() {
            cmd.get(
                `rm -r dump`,
                function() {
                    console.log('Dump Folder deleted!');
                    if (callback)
                        callback();
                }
            )
        });
    }

    function validateCount() {
        dbStat.countRecords(req, function(resp1) {
            resp1.status ? io.emit('notify', { text: 'Records Transfered! Source:' + resp1.sourceRecord + ' Destination:' + resp1.destinationRecord, type: 'success' }) : io.emit('notify', { text: 'Record Diff of ' + resp.diff + '. Please tru again!!', type: 'fail' })
        });
    }
    return {
        dumper: dumper
    }
}