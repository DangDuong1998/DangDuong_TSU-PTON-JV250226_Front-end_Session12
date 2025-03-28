let age = +prompt("Nhập tuổi:");
if(Number.isInteger(age) === true){
    if(age > 0 && age < 120){
        alert(`Tuổi ${age} đã nhập hợp lệ`);
    }
    else{
        alert(`Tuổi ${age} đã nhập không hợp lệ`);
    }
}
else{
    alert(`Tuổi ${age} đã nhập không hợp lệ`);
}
