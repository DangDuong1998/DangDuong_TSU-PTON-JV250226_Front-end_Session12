let a = Number(prompt("Nhập số nguyên 1: "));
let b = Number(prompt("Nhập số nguyên 2: "));
let c = Number(prompt("Nhập số nguyên 3: "));
let i = a;
if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
    if (i < b){
        i = b;
    }
    if( i < c){
        i = c;
    }
    alert(i);
}
else {
    alert(" Một hoặc tất cả các số đã nhập không phải số nguyên, hãy load lại trang!!!!");
}
