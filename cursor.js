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
