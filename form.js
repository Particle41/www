$(document).ready(function() {

var URL = 'https://pzpabvxh6b.execute-api.us-east-1.amazonaws.com/prod/ContactUs'

  $('#contact-form').submit(function (event) {
    event.preventDefault();
    var data = {
      name: $('#name-input').val(),
      email: $('#email-input').val(),
      description: $('#description-input').val()
    }

    $.ajax({
      type: 'POST',
      url: URL,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function () {
        // clear form and show a success message
      },
      error: function () {
        // show an error message
      }
    })
  })
})
