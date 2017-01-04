'use strict';

$(document).ready(function () {

    var URL = 'https://33hmf0tms1.execute-api.us-west-2.amazonaws.com/prod/apply';


    $('#application-form').submit(function (event) {
        event.preventDefault();
        var data = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            phone: $('#phone').val()
        };

        $.ajax({
            type: 'POST',
            url: URL,
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
                console.log('Successfully sent email.');
                // TODO: Show a formatted success message!
                window.alert("Thank you for your application.\nWe will be in touch shortly.");
                $('#application-form').find("#firstName").val("");
                $('#application-form').find("#lastName").val("");
                $('#application-form').find("#email").val("");
                $('#application-form').find("#phone").val("");
            },
            error: function (err) {
                console.log(err);
                console.log('Failed to send email.');
                window.alert("There was an error, please try again.");
                // TODO: show a formatted error message!
            }
        });
    });
});
