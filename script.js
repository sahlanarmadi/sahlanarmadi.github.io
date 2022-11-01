$(function () {
  $('a.smooth-scroll').click(function (event) {
    event.prevenDefault();
    let section = $(this).attr('href');

    $('html,body').animate(
      {
        scrollTop: $(section).offset().top - 64,
      },
      1250,
      'easeInOutExpo'
    );
  });
});
