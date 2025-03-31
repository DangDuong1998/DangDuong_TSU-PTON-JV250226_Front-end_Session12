function select() {
let option ;
let userName;
let userAge;
let number4;
let number5;
let number6;
let number7;
let number8;
let number9;
let output4;
let output6;
let i;
let check = true;
let sum6 = 0;
while(true){
    option = prompt(`Opt 1: Nhập tên của người dùng.
Opt 2: Nhập tuổi của người dùng. 
Opt 3: In tên và tuổi của người dùng.
Opt 4: In bảng cửu chương của một số.
Opt 5: Kiểm tra số nhập vào là số chẵn hay lẻ.
Opt 6: Tính tổng các số từ 1 đến N (N do người dùng nhập).
Opt 7: In các số trong một dãy (người dùng nhập dãy số).
Opt 8: Kiểm tra số nhập vào có phải là số nguyên tố hay không.
Opt 9: In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
Opt 10: Thoát khỏi chương trình.`);
        if (option=== null){
            break;
        }
        option = Number(option);
        if(option===10){
            break;
        }
        else{
            option = Number(option);   
            switch (option) {
                case 1:
                    while(true){
                        userName = prompt('Nhập tên của người dùng: ');
                        if(userName === null){
                            break;
                        }
                        else if(!userName || /\d/.test(userName)){
                            alert('Tên đã nhập không hợp lệ!!!');
                        }
                        else{
                            break;
                        }
                    }
                    break;
                    
                case 2:
                    while(true){
                        userAge = prompt('Nhập tuổi của người dùng: ');
                        if(userAge===null){
                            break;
                        }
                        userAge = Number(userAge);
                        if(isNaN(userAge) || userAge<=0 || userAge >=120 || userAge % 1 !== 0){
                            alert('Tuổi đã nhập không hợp lệ!!!');
                        }
                        else{
                            break;
                        }
                    }
                    break;
                    
                case 3:
                    if(userName && userAge){
                        alert(`Tên người dùng là: ${userName} \nTuổi người dùng là: ${userAge} Tuổi`);
                    }
                    else{
                        alert('Xin hãy chọn Opt 1 và Opt 2 để điền thông tin!!!');
                    }
                    break;
                case 4:
                    while(true){
                        number4 = prompt('In bảng cửu chương của số: ');
                        if(number4 === null){
                            break;
                        }
                        else if(isNaN(number4) || number4.trim() === ''){
                            alert('Hãy nhập một số!!!');
                        }
                        else{
                            number4=Number(number4);
                            output4 = '';
                            for(i=1;i<=9;i++){
                                output4+= `${number4} x ${i} = ${number4 * i}\n`;
                            }
                            alert(`Bảng cửu chương của số ${number4} là: \n${output4}`);
                        }
                        
                    }
                    break;
                   
                case 5:
                    while(true){
                        number5 = prompt('Nhập vào một số để kiểm tra tính chẵn lẻ của số đó: ')
                        if(number5===null){
                            break;
                        }
                        if( number5.trim()===''){
                            alert('Hãy nhập một số!!!');
                        }
                        else{
                            number5=Number(number5);
                            if(isNaN(number5)){
                                alert('Hãy nhập một số!!!');
                            }
                            else{
                                if(number5 % 2 === 0){
                                    alert(`Số ${number5} là số chẵn!!!`);
                                }
                                else{
                                    alert(`Số ${number5} là số lẻ!!!`);
                                }
                            }
                        }
                    }
                    break;
                   
                case 6:
                    while(true){
                        number6 = prompt('Tính tổng các số từ 1 đến N, hãy nhập N: ');
                        sum6=0;
                        output6='';
                        if (number6===null){
                            break;
                        }
                        else if(number6.trim()===''){
                            alert('Hãy nhập một số N!!!');
                        }
                        else{
                            number6=Number(number6);
                        if(isNaN(number6)){
                            alert('Hãy nhập một số N!!!');
                        }
                        else if(number6 > 1){
                            for(i=1;i<=number6;i++){
                                sum6 += i;
                                if(i < number6){
                                    output6+= `${i} + `;
                                }
                                else{
                                    output6+= `${i}`;
                                }
                            }
                            alert(`Tổng các số từ 1 đến ${number6} là : ${output6} = ${sum6}`);
                        }
                        else{
                            alert('Hãy nhập số lớn hơn 1');
                        }
                        }
                        
                    }
                    break;
                    
                case 7:
                    while(true){
                        number7 = prompt('Nhập dãy số: ');
                        if(number7 === null){
                            break;
                        }
                        else if(number7.trim()===''){
                            alert('Hãy nhập lại dãy số!!!');
                        }
                        else{
                            number7=Number(number7);
                            if(isNaN(number7)){
                                alert('Hãy nhập lại dãy số!!!');
                            }
                            else {
                                alert(`Dãy số đã nhập là: ${number7}`);
                            }
                        }
                    }
                    break;
                    
                case 8:
                    while(true){
                        check = true;
                        number8=prompt('Nhập một số để kiểm tra tính nguyên tố: ');
                        if(number8===null){
                            break;
                        }
                        number8 = Number(number8);
                        if(isNaN(number8)){
                            alert('Hãy nhập lại số: ');
                        }
                        else if( number8<=1){
                            alert(`${number8} không phải là số nguyên tố!!!`);
                        }
                        else{
                            for(i=2;i<=Math.sqrt(number8);i++){
                                if( number8 %i===0){
                                    check = false;
                                    break;
                                }
                            }
                            if(check === true){
                                alert(`${number8} là số nguyên tố!!!`);
                            }
                            else{
                                alert(`${number8} không phải là số nguyên tố!!!`);
                            }
                        }
                    }
                    break;  
                case 9:
                    while(true){
                        number9 = prompt('Nhập dãy số: ');
                        if(number9===null){
                            break;
                        }
                        else if(number9.trim()===""){
                            alert('Hãy nhập lại dãy số!!!');
                        }
                        else{
                            number9 = Number(number9);
                            if(isNaN(number9)){
                                alert('Hãy nhập lại dãy số!!!');
                            }
                            else{
                                alert(`Dãy số đã nhập sau khi đảo ngược là: ${number9.toString().split('').reverse().join('')}`);
                            }  
                        }
                        
                    }
                    break;
            }
        }
    
}

}

