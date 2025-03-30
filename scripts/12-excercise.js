function addnTimes(numtimes){
    let sum=0;
    for(let i=0;i<=numtimes;i++){
            console.log(`loop count ${i}`);
            sum = sum+add(10,20);
    }
    document.querySelector(".js-addntimes-display").innerHTML=sum;
}

function add(num1,num2){
return num1+num2;
}
let repeatid ='';
let sum1=0;
let j =0;
function addTwice(){
    repeatid = setInterval(function (){
       if(j ===2){
            j=0;
            document.querySelector(".js-addntimes-display").innerHTML= sum1;
            clearInterval(repeatid);
         }
        else{
            console.log("I else"+j);
            sum1 = sum1 + add(10,20);
        }
        j= j+1;   
    },1000);
    
}

function changeToFinished(){
    const finsh='Finished';
    setTimeout(() => {
        document.querySelector(".js-finsh-button").innerHTML = 'Loading';      
    }, 1000);

    setTimeout(() => {
         document.querySelector(".js-finsh-button").innerHTML = finsh;    
    }, 2001);
}

function addtoCart(){
    setTimeout(() => {
        const ad = document.querySelector(".js-Added").innerHTML = 'Added';    
    }, 1000);
    setTimeout(() => {
        const ad = document.querySelector(".js-Added").innerHTML = 'fd';    
    }, 2000);
    
}

