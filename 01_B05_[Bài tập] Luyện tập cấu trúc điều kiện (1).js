//Bài toán giả sử điểm thi cuối kỳ nhân 2, điểm thi giữa kỳ nhân 1 như thực tế...
// học lực = (diemThiGiuaKy + diemThiCuoiKy*2) / 3;
//điểm < 5 là YẾU
// 5<= điểm <= 6 là TRUNG BÌNH
//7<= điểm < 8 là KHÁ
//8<= điểm <=9 là GIỎI
//9< điểm  là XUẤT SẮC

let diemThiGiuaKy = Number(prompt("Nhập số điểm thi giữa kỳ: "));
let diemThiCuoiKy = Number(prompt("Nhập số điểm thi cuối kỳ: "));
let rank = (diemThiGiuaKy + diemThiCuoiKy*2) / 3;
if(rank < 5){
    rank = "YẾU";
}
else if(rank <= 6){
    rank = "TRUNG BÌNH";
}
else if(rank < 8){
    rank = "KHÁ";
}
else if(rank <=9){
    rank = "GIỎI";
}
else{
    rank = "XUẤT SẮC";
}
document.write(`Học lực của học sinh là ${rank}`);