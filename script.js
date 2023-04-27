$(window).on('load', function() {
 $('#card01').on('dblclick', function(){
  console.log('testing')
  $('#head01').hide(1000);
  $('#filler01').delay(1000).animate({'display': 'block'}, 0).hide(0).show(2000);
 })
 $('#card02').on('dblclick', function(){
  $('#head02').hide(1000);
  $('#filler02').animate({'display': 'block'}, 0).hide(0).show(2000);
 })
 $('#card03').on('dblclick', function(){
  $('#head03').hide(1000)
  $('#filler03').animate({'display': 'block'}, 0).hide(0).show(2000);
 })
}) 