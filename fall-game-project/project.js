const game=document.querySelector(".game-container")
const char=document.querySelector(".character")
let interval
let keyDown=false

//ball move
const moveLeft =()=>{
let laftPos=parseInt(window.getComputedStyle(char).getPropertyValue("left"))
if (laftPos>0)
char.style.left=laftPos - 2+ "px"

}

const moveRight =()=>{
    let laftPos=parseInt(window.getComputedStyle(char).getPropertyValue("left"))
    if (laftPos<370)
    char.style.left=laftPos + 2+ "px"
    
    }

    document.addEventListener("keydown",(event)=>{
if(!keyDown){
if(event.key=="ArrowLeft"){
    interval=setInterval(moveLeft,1)
}
else if(event.key=="ArrowRight"){
interval=setInterval(moveRight,1)
    
}
}

keyDown=true

    }
    )
    document.addEventListener("keyup",()=>{

clearInterval(interval)
keyDown=false
    })


    //generating the blocks
    const generateObstacle= () => {

let block=document.createElement("div")
let hole=document.createElement("div")
block.setAttribute("class","block")
hole.setAttribute("class","hole")
let randomhole=Math.floor(Math.random() * 320)
hole.style.left=randomhole + "px" 

game.appendChild(block)
game.appendChild(hole)

//to remove these elements ath the end of animation 
$('.block').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) {$(this).remove()})
$('.hole').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) {$(this).remove()})


    } 
    setInterval(generateObstacle , 1500)


    const checkcollisions = ( ) =>{
const allblocks=document.querySelectorAll(".block")
const allholes=document.querySelectorAll(".hole")
let hitObestacle

allblocks.forEach(b => {
let hitObestacle=false
if (collision(b , char)){
hitObestacle=true

allholes.forEach(h => {
    
    if(holeCollision(h , char)){
        hitObestacle=false

    }

});


}

if (hitObestacle){
alert("Game over baby try again!!!")
location.reload()
}
});



    }

    setInterval(checkcollisions , 1)


    //cheak obstacle collison 
    function collision(a,b){
let a_top=parseInt(window.getComputedStyle(a).getPropertyValue("top"))
let b_top=parseInt(window.getComputedStyle(b).getPropertyValue("top"))
    
return(
a_top + 20> b_top && a_top<b_top+20

);
}

function holeCollision(h,b){
let h_left=parseInt(window.getComputedStyle(h).getPropertyValue("left"))
let h_top=parseInt(window.getComputedStyle(h).getPropertyValue("top"))

let b_left=parseInt(window.getComputedStyle(b).getPropertyValue("left"))
let b_top=parseInt(window.getComputedStyle(b).getPropertyValue("top"))

return(
b_left>h_left&&b_left<h_left+50 && h_top+20>b_top<b_top&&h_top<b_top+20

)
}