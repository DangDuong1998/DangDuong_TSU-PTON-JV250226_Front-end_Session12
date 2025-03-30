let giaiThua;
let i ;
let result =1; //1! = 1;
let output ='';
check = false;
while(check===false){
    giaiThua = +prompt('Nhập số nguyên dương cần tính giai thừa: ');
    if(giaiThua > 0 && giaiThua % 1 ===0 ){
        for(i=1;i<=giaiThua;i++){
            result =  result * i;
            if(i !== giaiThua){
                output +=`${i} x `;
            }
            else{
                output +=`${i}`;
            } 
        }
        check = true;
    }
    else{
        alert('Số đã nhập phải là số nguyên dương!!!');
    }
}
document.write(`${giaiThua}! = ${output} = ${result}`);
