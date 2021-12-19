var l = 0
var t=0
var mh=0

let leftFlag = 0
let rightFlag = 0

var rad=200

let ball = document.querySelector(".ball");
let x = ball.getBoundingClientRect().x
let y = ball.getBoundingClientRect().y
console.log(x)
console.log(y)

dragElement(ball);
console.log(t)

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    if ((elmnt.offsetLeft-pos1)<0){
        elmnt.style.left = -(Math.pow((rad*rad-(elmnt.offsetTop - pos2)*(elmnt.offsetTop - pos2)),0.5)) + "px";
    }
    else{
        elmnt.style.left = (Math.pow((rad*rad-(elmnt.offsetTop - pos2)*(elmnt.offsetTop - pos2)),0.5)) + "px";
    }
    
    
  }

  function closeDragElement() {
    
    document.onmouseup = null;
    document.onmousemove = null;
  }
  return (elmnt.offsetTop - pos2)
}


const move=()=>{
  if(mh >rad){
    ball.style.left = -20 + "px";
    ball.style.top=rad+"px"
    mh=0
    return;
  }
  if(leftFlag == 0){
    if(t == 0+rad){
      leftFlag = 1
      mh+=10
      
    }
    t++;
    l=Math.pow((rad*rad-t*t),0.5)
    ball.style.left = l-10 + "px";
    ball.style.top=t+"px"
    
  }else if(leftFlag==1){
    if(t == mh ){
      leftFlag = 2
      
      
    }
    t--;
    l=Math.pow((rad*rad-t*t),0.5)
    ball.style.left = -l-10 + "px";
    ball.style.top=t+"px"
  }
  else if(leftFlag == 2){
    if(t == 0+rad){
      leftFlag = 3
      mh+=10
     
    }
    t++;
    l=Math.pow((rad*rad-t*t),0.5)
    ball.style.left = -l-10 + "px";
    ball.style.top=t+"px"
    
  }else if(leftFlag==3){
    if(t == mh ){
      leftFlag = 0
      
    }
    t--;
    l=Math.pow((rad*rad-t*t),0.5)
    ball.style.left = l-10 + "px";
    ball.style.top=t+"px"
  }
  
  requestAnimationFrame(move)
}

