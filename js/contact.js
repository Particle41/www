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
            success: function (data) {
                console.log(data);
                console.log('Successfully sent email.');
                // TODO: Show a success message!
                window.alert("Thank you! We'll be in touch shortly.");
                $('#contact-form').find("#name").val("");
                $('#contact-form').find("#email").val("");
                $('#contact-form').find("#phone").val("");
                $('#contact-form').find("#message").val("");
            },
            error: function (err) {
                console.log(err);
                console.log('Failed to send email.');
                window.alert("There was an error, please try again.");
                // TODO: show an error message
            }
        });
    });
});
