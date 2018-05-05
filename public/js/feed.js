$("#btn").on('click', function () {
    var user = {
        post: $("#input").val()
    }
    $.post('/users', user).then(function () {
        console.log('posts')
    })
})

// $(document).ready(function () {
//     $('input#input_text, textarea#textarea1').characterCounter();
// });
$('input#input_text, textarea#textarea1').characterCounter();

var maxLength = 150;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var length = maxLength-length;
  $('#chars').text(length);
});