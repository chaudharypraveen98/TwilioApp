$(function () {

    'use strict';
    var acccountID = "";
    var accPassword = ""
    $("#send-now").click(function () {
        // Your Twilio credentials
        var SID = acccountID
        var Key = accPassword

        $.ajax({
            type: 'POST',
            url: 'https://api.twilio.com/2010-04-01/Accounts/' + SID + '/Messages.json',
            data: {
                "To": "+18329349203",
                "From": "+919650644617",
                "Body": "Hello World"
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa(SID + ':' + Key));
            },
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log(data);
                alert("success");
            }
        });
    });
})