let btn1 = document.querySelector("button")

let btn1Width=10;
btn1.addEventListener("click",function(e){
    // btn.innerText=Number(btn.innerText)+1
    console.log(btn1.style.width)
    btn1Width+=10;
    btn1.style.width=btn1Width+"px"
})


let btn2 = document.querySelector(".btn")
let btn2Left=0;
let direction=true;
btn2.addEventListener("click",function(){
    if(direction){
        if(window.innerWidth>btn2Left+100){
            btn2Left+=100;
        }
        else{
            btn2.innerText="<"
            direction=false;
        }
    }
    else{
        if(btn2Left>0){
            btn2Left-=100;
        }
        else{
            btn2.innerText=">"
            direction=true;
        }
    }
    
   
   btn2.style.left=btn2Left+"px";
   console.log()
})