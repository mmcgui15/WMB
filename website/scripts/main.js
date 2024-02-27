var $container = $('body');
var $drone = $('.drone');
var droneCenter = {
  x: $drone.width()/2,
  y: $drone.height()/2
};

var duck_test=0;
function getOffset() {
  duck_test = document.getElementById("drone").getBoundingClientRect();
//  console.log('each 1 second...', duck_test.left);
}


setInterval(getOffset, 100);

var duckx = 0.0;

var delay_counter = 0;
var max_counter = 20;
var direction = 1; //0 == right, 1 == left
window.addEventListener("mousemove", (e) => {
let xPos = e.clientX;
//console.log(xPos, duck_test.left, direction);

if (xPos > duck_test.left && direction == 1){
document.getElementById("duckie").src = "images/ducksprite_r.png";
direction = 0;
} 
if (xPos < duck_test.left && direction == 0)  {
document.getElementById("duckie").src = "images/ducksprite1.png";
direction =1;
}
// }
//  delay_counter ++;
});


$container.on('mousemove', function(event) {
  $drone.css('transform', `translate3d(${event.pageX}px, ${event.pageY}px, 0)`);
});
