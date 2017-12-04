$(document).ready(function() {
    makeTemplates();
    bindButtons();
    // var socket = io();

});
var logs = [];

var reqObj = { source: { dbs: [] }, destination: {} };
var socket = io();

function bindButtons() {
    bind('.mainContainer .dbContainer .db', function() {
        var dataItem = $.view(this).data;
        console.log(dataItem);
        console.log($(this).find('.options').attr("src"))
        if ($(this).find('.options').attr("src") == '../images/check.png') {
            $(this).find('.options').attr("src", "../images/uncheck.png");
            reqObj.source.dbs.splice(reqObj.source.dbs.indexOf(dataItem.name), 1);
        } else {
            $(this).find('.options').attr("src", "../images/check.png");
            reqObj.source['dbs'].push(dataItem.name);
        }
    });
    bind('.mainContainer .inputs .source .btn', function() {
        if ($('.source .url').val() != "" && $('.source .url').val() != "")
            fetchDbList();
        else {
            helpers.notification({ type: 'fail', text: 'Enter the source url and port number!' });
        }
    });

    bind('.mainContainer .inputs .footer .btn', function() {
        var handler = {
            all: function() {
                if (validateEntries() && !$(this).hasClass('disableButtons')) {
                    $('.source .enter').each(function() {
                        reqObj.source[$(this).attr('name')] = $(this).val();
                    });
                    $('.destination .enter').each(function() {
                        reqObj.destination[$(this).attr('name')] = $(this).val();
                    });
                    reqObj.type = 'all';
                    helpers.showLoader();
                    helpers.disableButtons();
                    execute('backupDb', reqObj, function(resp) {
                        if (resp) {
                            console.log('backed up!');
                            helpers.hideLoader();
                            helpers.enableButtons();
                        } else {
                            helpers.notification({ type: 'fail', text: 'Fail to establish connection to the database!' });
                        }
                    })
                } else {
                    helpers.notification({ type: 'fail', text: 'Please provide the Database credentials!!' });
                }
            },
            selected: function() {
                if (validateEntries() && reqObj.source.dbs.length && !$(this).hasClass('disableButtons')) {
                    $('.source .enter').each(function() {
                        reqObj.source[$(this).attr('name')] = $(this).val();
                    });
                    $('.destination .enter').each(function() {
                        reqObj.destination[$(this).attr('name')] = $(this).val();
                    });
                    reqObj.type = 'selected';
                    helpers.showLoader();
                    helpers.disableButtons();
                    execute('backupDb', reqObj, function() {
                        console.log('backed up!');
                        helpers.notification({ type: 'success', text: 'Databases backed up successfully!!' })
                        helpers.hideLoader();
                        helpers.enableButtons();
                    })
                } else {
                    helpers.notification({ type: 'fail', text: 'Please provide the Database credentials and choose one of the db!!' });
                }
            }
        }
        handler[$(this).data('id')]();
    });
    bind('.mainContainer .reset', function() {
        console.log('here');
        helpers.showDbText();
        helpers.showLogText();
        $('.mainContainer .inputs .values .source .enter').val('');
        $('.mainContainer .inputs .values .destination .enter').val('');
        $('.mainContainer .dbContainer .dbs').html('');
        $('.mainContainer .logsList .logs').html('');
    })
}

socket.on('notify', function(resp) {
    helpers.notification(resp);
});

function fetchDbList() {
    var reqObj = {};
    $('.inputs .source .enter').each(function() {
        reqObj[$(this).attr('name')] = $(this).val();
    });
    helpers.showLoader();
    helpers.disableButtons();
    execute('fetchDbList', reqObj, function(resp) {
        if (resp) {
            helpers.hideDbText();
            rb('.mainContainer .dbContainer .dbs', 'db', resp);
            bindButtons();
            helpers.hideLoader();
            helpers.enableButtons();
        } else {
            helpers.notification({ type: 'fail', text: 'Fail to establish connection to the database!' });
            helpers.hideLoader();
            // helpers.enableButtons();
        }
    });
}

socket.on('logs', function(resp) {
    helpers.hideLogText();
    resp.time = moment(resp.time).format('LT');
    // $.observable(logs).insert(resp);
    logs.push(resp);
    makeTemplates();
    rb('.mainContainer .logsList .logs', 'logList', logs);
});

function validateEntries() {
    return $('.source .urlrl').val() != "" && $('.source .port').val() != "" && $('.destination .url').val() != "" && $('.destination .port').val() != "" ? true : false;
}