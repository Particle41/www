'use strict';

$(document).ready(function () {

    var URL = 'https://7s32rh6p7k.execute-api.us-west-2.amazonaws.com/dev/contact';


    $('#contact-form').submit(function (event) {
        event.preventDefault();
        var data = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            message: $('#message').val()
        };

        $.ajax({
            type: 'POST',
            url: URL,
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function () {
                // TODO: Show a success message!
                console.log('Successfully sent email.');
                $('#contact-form').find("#name").val("");
                $('#contact-form').find("#email").val("");
                $('#contact-form').find("#phone").val("");
                $('#contact-form').find("#message").val("");
            },
            error: function () {
                console.log('Failed to send email.');
                // TODO: show an error message
            }
        });
    });
});
