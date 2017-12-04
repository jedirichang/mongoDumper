var MongoClient = require('mongodb').MongoClient;

module.exports = () => {
    function handle(data, cb) {
        // Connect using MongoClient
        console.log('Fetching Database list...');
        MongoClient.connect('mongodb://' + data.url + ':' + data.port, function(err, db) {
            if (err) {
                console.log('DB connection failed');
                global.io.emit('logs', { type: 'fail', operation: 'Cannot connect to ' + data.url, time: new Date().getTime() })
                cb(false);
            } else {
                // Use the admin database for the operation
                var adminDb = db.admin();
                // List all the available databases
                adminDb.listDatabases(function(err, result) {
                    cb(result.databases);
                    db.close();
                });
            }
        });
    }

    return {
        handle: handle
    }
}