// dãy fibonacci là dãy có số sau bằng tổng 2 số trước;
// theo toán học truyền thống, dãy fibonacci sẽ bắt đầu từ 1 thay vì 0;
let number1 =1;
let number2=1; 
let number3;  //1
let boDem=1;
let sum =0;
// let output = "";

while(boDem<=20){
    sum= sum +number1;
    number3= number1 + number2;
    number1=number2;
    number2=number3;
    boDem ++;
}
document.write(`${sum.toLocaleString()} là tổng của 20 số đầu tiên của dãy fibonacci`);
