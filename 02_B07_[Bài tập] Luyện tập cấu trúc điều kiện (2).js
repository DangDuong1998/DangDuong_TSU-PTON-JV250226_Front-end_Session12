// ta có phương trình bậc 2 dạng:
// a*(x**2) +b*x +c = 0 && a !== 0
// Nếu delta > 0: thì phương trình có nghiệm phân biệt theo công thức:
// x1 = (-b - căn bậc 2 của delta ) / 2 * a ; x2 = (-b - căn bậc 2 của delta ) / 2 * a
// Nếu delta = 0: thì phương trình có nghiệm kép theo công thức:
// x = -b / 2 * a
//Nếu delta < 0: thì phương trình có nghiệm 2 phức theo công thức: 
//x1 = (-b + i căn của tuyệt đối delta) / 2 * a; // i là căn của âm
//x2 = (-b - i căn của tuyệt đối delta) / 2 * a; // i là căn của âm


let a = +prompt("Nhập hằng số a của phương trình: ");
let b = +prompt("Nhập hằng số b của phương trình: ");
let c = +prompt("Nhập hằng số c của phương trình: ");
let x1; // nghiệm 1
let x2; // nghiệm 2
let x; // nghiệm kép
let phanThuc; // phần đầu của nghiệm phức
let phanAo; // phần sau của nghiệm phức

if (a!==0){
    let delta = b**2 - 4 * a * c;
    if (delta > 0){
        x1 = (-b + Math.pow(delta, 1 / 2)) / (2 * a);
        x2 = (-b - Math.pow(delta, 1 / 2)) / (2 * a);
        alert(`Kết quả x của phương trình bậc 2 có dạng a*(x**2) +b*x +c = 0 với a khác 0 có 2 nghiệm là: ${x1} và ${x2}`);
    }
    else if(delta === 0){
        x = -b / (2*a);
        alert(`Kết quả x của phương trình bậc 2 có dạng a*(x**2) +b*x +c = 0 với a khác 0 có 2 nghiệm kép là: ${x}`);
    }
    else{
        phanThuc = -b / ( 2 * a);
        phanAo =  (Math.pow(Math.abs(delta),1 / 2)) / ( 2 * a);
        x1 = `${phanThuc} + ${phanAo}i`;
        x2 = `${phanThuc} - ${phanAo}i`;
        alert(`Kết quả x của phương trình bậc 2 có dạng a*(x**2) +b*x +c = 0 với a khác 0 có 2 nghiệm phức là: ${x1} và ${x2}`);
    }
}
else{
    alert("a phải là số khác 0");
}
