// dãy số tự nhiên sẽ bắt đầu từ số 0
let number=0;
let sum=0;
let boDem=1;
let output ='';
while(boDem<=30){
    if(number%7===0){
        sum += number;
        if (boDem===30){
            output+=`${number}`// để bỏ dấu phẩy cuối của số cuối :D
        }
        else{
            output+=`${number}, `
        }
        boDem++;
    }
    number++;
    
}
document.write(`${sum} là tổng của dãy số tự nhiên chia hết cho 7 như sau: ${output}`);