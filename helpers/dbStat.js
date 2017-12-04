var MongoClient = require('mongodb').MongoClient;
var async = require('async');
var fetchDbList = require('./fetchDbList')();
module.exports = () => {
    function countRecords(data, cb) {
        var countObj = { sourceCount: 0, destinationCount: 0 };
        var dbList;
        data.source.dbs.length > 0 ? dbList = data.source.dbs : fetchDbList.handle(data.source, resp => { dbList = resp });
        async.forEachSeries(dbList, (dbName, callback) => {
            var cred = { dbName: dbName };
            countInDb(data.source, cred, 'sourceCount', countObj, function(collections) {
                countInDb(data.destination, cred, 'destinationCount', countObj, function() {
                    callback();
                });
            });
        }, function() {
            compareRecords(countObj, function(resp) {
                cb(resp);
                console.log(resp);
            });
        });
    }

    function countInDb(data, cred, name, countObj, callback) {
        MongoClient.connect('mongodb://' + data.url + ':' + data.port + '/' + cred.dbName, function(err, db) {
            fetchCollections(db, cred, name).then(resp => {
                console.log(cred);
                async.forEachSeries(cred.colls, (coll, next) => {
                    if (coll.name != "system.indexes") {
                        db.collection(coll.name).count({}, function(err, numOfDocs) {
                            if (err) callback(false);
                            else {
                                countObj[name] += numOfDocs;
                                next();
                            }
                        });
                    } else next();
                }, function() {
                    db.close();
                    callback(true);
                });
            })
        });
    }

    function fetchCollections(db, cred, name) {
        return new Promise((res, rej) => {
            name == 'sourceCount' ? db.listCollections().toArray((err, collInfo) => {
                cred['colls'] = collInfo;
                res(cred);
                // db.close();
            }) : res(cred);
        });
    }

    function compareRecords(countObj, callback) {
        if (countObj.sourceCount == countObj.destinationCount) {
            callback({ status: true, sourceRecords: countObj.sourceCount, destinationRecords: countObj.destinationCount });
        } else {
            callback({ status: false, diff: Math.abs(countObj.sourceCount - countObj.destinationCount) });
        }
    }
    return {
        countRecords: countRecords
    }
}


// dumper.dumper(req, function() {
//     console.log('Success');
// });