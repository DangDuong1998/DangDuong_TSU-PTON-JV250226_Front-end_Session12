let soTien = +prompt('Nhập số tiền ban đầu: ');
let soThangChoVay= +prompt('Nhập số tháng cho vay: ');
let laiSuat= +prompt('Nhập lãi suất hàng tháng: ');
let output;
let i;

for(i= 1;i<=soThangChoVay;i++) {
    soTien = soTien+ (soTien * (laiSuat/100));
    output = Math.floor(soTien/1000)*1000;
    console.log(`Tháng ${i}: ${output.toLocaleString()}`);
}

