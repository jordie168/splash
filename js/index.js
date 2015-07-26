$(window).load(function() {
  $('img').click(function() {
    $(this).hide();
  })
  $('p').click(function(){
    $('img').show();
  })
  $('.changeName').click(function(){
    $('.changeName').text('Hi Im Jordan');
  })

});