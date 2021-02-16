const moveLeft =()=>{
    let left=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left-=100;
    if(left>=0){
        character.style.left=left+"px";
    }
}

const moveRight =()=>{
    let left=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left+=100;
    if(left<300){
        character.style.left=left+"px";
    }
}

document.addEventListener("keydown",event=>{
    if(event.key==="ArrowLeft"){
        moveLeft();
    }
    if(event.key==="ArrowRight"){
        moveRight();
    }
})

const block = document.getElementById("block");
block.addEventListener("animationiteration",()=>{
    let random = Math.floor(Math.random()*3);
    left =random*100;
    block.style.left = left + "px";
})

setInterval(()=>{
    let characterLeft=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    let blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let blockTop=parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(characterLeft==blockLeft && blockTop<400 && blockTop>300){
        alert("Game Over");
        block.style.animation="none"
    }
},1)