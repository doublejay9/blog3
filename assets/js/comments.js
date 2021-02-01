(function ($) {
  $('#comment-form').submit(function () {
    var form = this;
    $(form).btn.disabled = true;
    $('.btn-submit').html('Loading...');
    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        $('.btn-submit').html('Submitted');
        $('#comment-form.js-notice').removeClass('notice--danger').addClass('notice--success');
        showAlert('<b>Thanks for your comment.</b> It will show on the site once it has been approved.');
      },
      error: function (err) {
        console.log(err);
        $('.btn-submit').html('Submit');
        $('#comment-form.js-notice').removeClass('notice--success').addClass('notice--danger');
        showAlert('<b>Sorry. There was an error with your submission.</b> Please make sure all fields have been completed and try again.');
        $(form).btn.disabled = false;
      }
    });
    return false;
  });
  function showAlert(message) {
    $('#comment-form.js-notice').removeClass('hidden');
    $('#comment-form.js-notice-text').html(message);
  }
})(jQuery);
