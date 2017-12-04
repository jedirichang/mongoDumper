var helpers = {
    notification: function(req) {
        $('.notify').hide();
        $('.notify').show().text(req.text);
        req.type == 'success' ? $('.notify').addClass('success').removeClass('fail') : $('.notify').addClass('fail').removeClass('success');
        // $('.notify').fadeOut(7000);
        setTimeout(function() {
            $('.notify').hide()
        }, 5000)
    },
    showLoader: function() {
        $('.loader').show();
    },
    hideLoader: function() {
        $('.loader').hide();
    },
    disableButtons: function() {
        $('.inputs .footer .btn').css('pointer-events', 'none');
        $('.inputs .footer .btn .small_loader').show();
        $('.inputs .footer .btn').addClass('disableButton');
    },
    enableButtons: function() {
        $('.inputs .footer .btn').css('pointer-events', 'auto');
        $('.inputs .footer .btn .small_loader').hide();
        $('.inputs .footer .btn').removeClass('disableButton');
    },
    hideDbText: function() {
        $('.mainContainer .dbContainer .dbText').hide();
    },
    hideLogText: function() {
        $('.mainContainer .logsList .logText').hide();
    },
    showDbText: function() {
        $('.mainContainer .dbContainer .dbText').show();
    },
    showLogText: function() {
        $('.mainContainer .logsList .logText').show();
    }
}