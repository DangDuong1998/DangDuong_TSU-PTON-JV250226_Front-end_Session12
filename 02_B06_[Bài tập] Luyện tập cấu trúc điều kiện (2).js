// ta có phương trình bậc 1 dạng:
// a*x +b = 0 && a !== 0


let a = +prompt("Nhập hằng số a của phương trình: ");
let b = +prompt("Nhập hằng số b của phương trình: ");
if (a!==0){
    let x = -b / a
    alert(`Kết quả x của phương trình bậc 1 có dạng a*x +b = 0 với a khác 0 là: ${x}`);
}
else{
    alert("a phải là số khác 0");
}
