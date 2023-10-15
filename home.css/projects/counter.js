let a=0;
document.getElementById("reset").onclick=function(){
    a=0;
    document.getElementById("num").innerHTML=a;

}
document.getElementById("count").onclick=function(){
   Number(a);
    a+=1;
    console.log(a);
    document.getElementById("num").innerHTML=a;

}
document.getElementById("submit").onclick=function(){
    const card=document.getElementById("card");
const upi=document.getElementById("upi");
if(upi.checked){
    console.log("upi")
}
else if(card.checked){
    console.log("card")
}

}
let ax=['anoop',1,2]
let ay=['anoop',1,2]
ax.push(...ay);
console.log(...ax)
var a1=0;
function fun(...n){
   
    for(i of n){
        a1+=i;
        
    }
}
fun(1,2,3,4);
console.log(a1)
let arr=[1,2,3,4]
// let squares=arr.map(p);
arr.forEach(p);
function p(element,array,index){
     return array[index]=element*2;

}
console.log(arr);
// arr.forEach(print);
// function print(element){
//     console.log(element);

// }
let list=[10,20,30,40]
let total=list.reduce(tt);
function tt(element,total){
    return element+total
}
console.log(total);
document.getElementById("start").onclick=function(){
    let t=setInterval(hour,1000);
    var cs=0;
    function hour(){
        
        cs+=1
        document.getElementById('sec').innerHTML=`${cs}`;
        if(cs==60){
            cs=0;
        }

    }
    document.getElementById("stop").onclick=function(){
        clearInterval(t);
        
    }

}




