const incrementButton=document.getElementById('increment');
const counterId=document.getElementById('counter');
const decrementButton=document.getElementById('decrement');
let count=0;




incrementButton.addEventListener('click',function(){
    if (count===10){
        alert('no more count');
    } else {
        count=count+1;
        counterId.innerText=count;
    }
    }
);
decrementButton.addEventListener('click', function(){
    if (count===0){
        alert('the result is negative');
    } else{
        
            count=count-1;
            counterId.innerText=count;
    }
});
