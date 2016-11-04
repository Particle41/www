'use strict';

$(document).ready(function() {

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
          console.log('Successfully sent email.');
        // clear form and show a success message
      },
      error: function () {
          console.log('Failed to send email.');
        // show an error message
      }
  });
  });
});
