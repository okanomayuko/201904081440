$(function() {
  var $win = $(window),
      $cloneNav = $('nav').addClass('clone-nav').appendTo('body'),
      showClass = 'is-show';

  $win.on('load scroll', function() {
    var value = $(this).fadein();
    if ( value > 500 ) {
      $cloneNav.addClass(showClass);
    } else {
      $cloneNav.removeClass(showClass);
    }
  });
});