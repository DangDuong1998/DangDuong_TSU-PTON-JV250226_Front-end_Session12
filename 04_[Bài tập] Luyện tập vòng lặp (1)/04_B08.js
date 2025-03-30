
function play(){ 
    let max;
    let min;
    let random;
    let guess;
    let check=false;
    while(check===false){
        min = +prompt('Nhập vào số nguyên nhỏ nhất của khoảng');
        max = +prompt('Nhập vào số nguyên lớn nhất của khoảng');
        random = Math.floor(Math.random()*(max-min+1)+min);
        while(guess!==random){
            guess = +prompt(`Hãy đoán số nguyên ngẫu nhiên trong khoảng đã nhập từ ${min} đến ${max}`);
            if(guess<random){
                alert('Số đã chọn nhỏ hơn số ngẫu nhiên');
            }
            else if(guess>random){
                alert('Số đã chọn lớn hơn số ngẫu nhiên');
            }
        }
            check=true;
            alert(`Chúc mừng bạn đã đoán đúng ${random}!!!!!`);
           
    }
   
    
}
