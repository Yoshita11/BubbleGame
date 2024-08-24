var timer=6;
var score=0;
var rn=0;
function generateBubble(){
    var count="";
    var a=document.querySelector("#pbottom");
for (var i=1;i<134;i++)
{
   var r= Math.floor(Math.random()*30);
    count +=`<div class="button">${r}</div>`;
    a.innerHTML= count;
}
}

funct  ion timeri(){
    var a=setInterval(function(){
        if(timer>0)
        {
             timer--;
            document.querySelector("#time").textContent=timer; 
        }else{
            clearInterval(a);
            var a=document.querySelector("#pbottom").innerHTML="GAME OVER";
           // alert("Game over");
        }
      
    },1000);
    

}

function hit(){
    rn=Math.floor(Math.random()*30);
    var b=document.querySelector("#hitno");
    b.textContent=rn;
}
function scoredisp(){
    score+=10;
    var c=document.querySelector("#score");
    c.innerHTML=score;
   
   
}
var d=document.querySelector("#pbottom");
    
d.addEventListener("click",function(dets){
    
    var buttc=Number(dets.target.innerHTML);
    if(buttc==rn)
    {
        generateBubble();
        hit();
        scoredisp();
        
    }
})

generateBubble();
hit();
timeri();
