// $(document).on('load', function () {

  $('.raise').mouseenter(function () {
      console.log('dont suck');
    $('.raise').animate({ bottom: '15px' }, 1000); //raises any div with class='raise'
  });

  $('.raise').mouseleave(function () {
    $(this).animate({ bottom: '0px' }, 1000); //lowers any div with class='raise'
  });
// });
