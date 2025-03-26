let a = Number(prompt("Nhập số cần kiểm tra: "));
let doc="";
if (Number.isInteger(a)){
    if(a > 0){
        alert("Số đã nhập lớn hơn 0");
        doc="Số đã nhập lớn hơn 0";
    }
    else if(a < 0){
        alert("Số đã nhập nhỏ hơn 0");
        doc="Số đã nhập nhỏ hơn 0";
    }
    else{
        alert("Số đã nhập bằng 0");
        doc="Số đã nhập bằng 0";
        
    }
}
else {
    alert("Số đã nhập không phải số nguyên");
    doc="Số đã nhập không phải số nguyên";
}
document.write(doc);