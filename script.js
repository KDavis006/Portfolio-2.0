$(window).on('load', function() {
 $('#card01').on('click', function(){
  console.log('testing')
  $('#head01').hide(1000);
  $('#filler01').delay(1000).animate({'display': 'block'}, 0).hide(0).show(2000);
  $('#card01').off('click');
 })
 $('#card02').on('click', function(){
  $('#head02').hide(1000);
  $('#filler02').animate({'display': 'block'}, 0).hide(0).show(2000);
  $('#card02').off('click');
 })
 $('#card03').on('click', function(){
  $('#head03').hide(1000)
  $('#filler03').animate({'display': 'block'}, 0).hide(0).show(2000);
  $('#card03').off('click');
 })
}) 


