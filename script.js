// $(document).on('load', function () {

//   $('.raise').mouseenter(function () {
//       console.log('dont suck');
//     $('.raise').animate({ bottom: '15px' }, 1000); //raises any div with class='raise'
//   });

//   $('.raise').mouseleave(function () {
//     $(this).animate({ bottom: '0px' }, 1000); //lowers any div with class='raise'
//   });
// });

// acts as the cursor
let cursorPacman = document.getElementById('pacman');
const onMouseMove = (e) =>{
  cursorPacman.style.left = e.pageX + 'px';
  cursorPacman.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);


// this makes the ghost follow the cursor in a more delayed action so that it looks like the pacman cursor is running away from the ghost

// variables for the mouses x and y cordinates
var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

// grabs the mouses cordinates when the mouse moves
$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

// makes it follow the mouse but slower so it looks like the cursor is running away
var $loop = setInterval(function(){
// change 12 to alter damping higher is slower
$xp += (($mouseX - $xp)/12);
$yp += (($mouseY - $yp)/12);
// tells the ghost to chase after the cursor
$("#ghost").css({left:$xp +'px', top:$yp +'px'});  
}, 30);