let check = false;
let input;
while(check === false){
    input = +prompt("Nhập nhiệt độ");
    if(input > 100){
        alert(`${input} độ là nhiệt độ lớn hơn 100 độ, hãy giảm nhiệt độ bằng cách nhập lại!!!`)
        continue;
    }
    else if(input < 20){
        alert(`${input} độ là nhiệt độ nhỏ hơn 20 độ, hãy tăng nhiệt độ bằng cách nhập lại!!!`)
        continue;
    }
    else{
        check = true;
    }
}
alert(`${input} độ là nhiệt độ ok!!!`);


