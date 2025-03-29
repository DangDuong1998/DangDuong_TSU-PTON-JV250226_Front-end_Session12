// Số nguyên tố là số chỉ chia hết cho 1 và chính nó (trừ số 1)
let soNguyenTo = 0;
let soTrongKhoang; // số để chia
let boDem = 0; // đếm đạt 20
let output = ""; 
let i;
let check;

for(soNguyenTo=1;soNguyenTo>0;soNguyenTo++){
    if (soNguyenTo > 1){
                check=true;
    }
    else{
        continue;
    }
    for(soTrongKhoang=2;soTrongKhoang<soNguyenTo;soTrongKhoang++){ // vì số nguyên tố luôn chia hết cho 1 và chính nó nên k xét 1 và chính nó nữa ( trừ số 2 là trường hợp duy nhất)
        if(soNguyenTo % soTrongKhoang===0){
            check = false;
            break;
        }
    }
    if(check === true){
        output += `${soNguyenTo},`  ;
        boDem += 1;
    }
    if(boDem ===20){
        break;
    }
}

document.write(`Ta có dãy sô nguyên tố gồm ${boDem} số nguyên tố đầu tiên là: ${output}`); 
