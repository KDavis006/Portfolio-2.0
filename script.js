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





// start of the cursor section 
const onMouseMove = () =>{

}

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('scroll', onMouseMove);

// start of the ghost movement
// this makes the ghost follow the cursor in a more delayed action so that it looks like the pacman cursor is running away from the ghost

// variables for the mouses x and y cordinates
var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

// grabs the mouse coordinates when the mouse moves
$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

function ghostMovement(){

  // check if the element has class hover, if yes then run to top left corner
  if ($("#ghost").hasClass("hover")) {
  } else { // otherwise chase the cursor
    $xp += (($mouseX - $xp)/32);
    $yp += (($mouseY - $yp)/32);
  }
  
  // set the new position of the ghost
  $("#ghost").css({left:$xp +'px', top:$yp +'px'});  
}

// makes it follow the mouse but slower so it looks like the cursor is running away
var $loop = setInterval(ghostMovement, 1);

// whenever you hover over anything the ghost runs away from your cursor
$('.hover').mouseenter(function() {
  
  // remove the mousemove event listener and run to top left corner
  $(window).off("mousemove");
  $("#ghost").addClass("hover");
  
}).mouseleave(function(){

  // add back the mousemove event listener and chase the cursor
  $(document).on("mousemove", function(e) {
    $mouseX = e.pageX;
    $mouseY = e.pageY;
  });
  $("#ghost").removeClass("hover");
  
});


const cards = document.querySelectorAll('.card');

cards.forEach(div => {
    Array.from(div.children).forEach(child => {
        child.style.transformStyle = 'preserve-3d';
    });

    div.addEventListener('mouseenter', () => {
        div.addEventListener('mousemove', rotateDiv);
    });

    div.addEventListener('mouseleave', () => {
        div.removeEventListener('mousemove', rotateDiv);
        div.style.transform = '';
    });

    function rotateDiv(e) {
        const rect = div.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = e.clientX - rect.left - centerX;
        const deltaY = e.clientY - rect.top - centerY;

        div.style.transform = `rotate3d(${+deltaY}, ${-deltaX}, 0, 30deg)`;

        var shadowX = deltaX * 0.1;
        var shadowY = deltaY * 0.1;
        $(div).css("box-shadow", `${shadowX}px ${shadowY}px 2rem .05rem rgba(134, 85, 255, .4)`);
    }
  });