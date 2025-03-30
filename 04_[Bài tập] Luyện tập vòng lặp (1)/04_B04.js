// dãy fibonacci là dãy có số sau bằng tổng 2 số trước;
// theo toán học truyền thống, dãy fibonacci sẽ bắt đầu từ 1 thay vì 0;
let number1 =1;
let number2=1; 
let number3;  //1
let boDem=1;
let output = "";
while(number1%5!==0){
    number3= number1 + number2;
    number1=number2;
    number2=number3;
    console.log('checkout');
    if(number1 % 5===0){
        output+= `${number1} là số đầu tiên trong dãy fibonacci chia hết cho 5!`
    }
}

document.write(output);
