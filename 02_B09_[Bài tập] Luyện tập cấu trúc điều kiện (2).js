// Ba số a, b, c phải thỏa mãn bất đẳng thức tam giác, cụ thể là:
// a + b > c
// a + c > b
// b + c > a

let a = +prompt(" Nhập chiều dài cạnh a của tam giác: ");
let b = +prompt(" Nhập chiều dài cạnh b của tam giác: ");
let c = +prompt(" Nhập chiều dài cạnh c của tam giác: ");

if(((a + b) > c) && ((a + c) > b) && ((b + c) > a)){
    alert("3 cạnh đã nhập là 3 cạnh của 1 tam giác");
}
else{
    alert("3 cạnh đã nhập không phải là 3 cạnh của 1 tam giác");
}