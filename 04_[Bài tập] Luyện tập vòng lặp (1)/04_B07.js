// dãy số sẽ bắt đầu từ số 1 -> 100;
let number=1;
let sum=0;
let boDem=1;
let output ='';
while(boDem<=100){
    if(number%3===0 && number%5===0){
        console.log('FizzBuzz');
    }
    else if(number%3===0){
        console.log('Fizz');
    }
    else if(number%5===0){
        console.log('Buzz');
    }
    else{
        console.log(number);
    }
    number++;
    boDem++;
}
