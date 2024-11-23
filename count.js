const incrementButton=document.getElementById('increment');
const counterId=document.getElementById('counter');
const decrementButton=document.getElementById('decrement');
let count=0;
function increaseCount(){
    count=count+1;
    counterId.innerText=count;
}
function decrementCount(){
    count=count-1;
    counterId.innerText=count;
}

incrementButton.addEventListener('click',increaseCount);
decrementButton.addEventListener('click',decrementCount);
