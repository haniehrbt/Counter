const number=document.getElementById('number');
const increaseBtn=document.getElementById('increase');
const decreaseBtn=document.getElementById('decrease');
const resetBtn=document.getElementById('reset');

let newNum;

increaseBtn.addEventListener('click',function (){
    newNum=Number(number.innerHTML)+1;
    number.innerHTML=newNum;
    if(newNum>0){
          document.getElementById('number').style.color="green";  
    }
    else if(newNum==0) {
        document.getElementById('number').style.color='white';
    }

});

resetBtn.addEventListener('click',function(){
    newNum=number.innerHTML=0;
    if(newNum==0){
        document.getElementById("number").style.color='white';
    }
});

decreaseBtn.addEventListener('click',function(){
    newNum=Number(number.innerHTML) - 1;
    number.innerHTML=newNum;
    if(newNum<0){
        document.getElementById('number').style.color='red';
    }
    else if(newNum==0){
        document.getElementById('number').style.color='white';
    }
})