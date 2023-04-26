$(document).ready(function(){
    $('form').submit(function(event) {
      event.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'https://api.staticforms.xyz/submit',
        data: $('form').serialize(),
        success: function(data) {
          $('form').hide();
          alert('送信が完了しました');
        },
        error: function(err) {
          alert('エラーが発生しました');
        }
      });
    });
  });