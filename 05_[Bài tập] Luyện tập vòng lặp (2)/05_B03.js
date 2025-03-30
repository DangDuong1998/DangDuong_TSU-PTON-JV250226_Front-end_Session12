let length = 5;
let i;
let tri1;
let tri2;
let tri3;
let tri4;
for(i=1;i<=length;i++){
    tri1 = '*'.repeat(i).padEnd(length,' ');
    tri2 = '*'.repeat(length+1-i).padEnd(length,' ');
    tri3 = ' '.repeat(length-i).padEnd(length,'*');
    tri4 = ' '.repeat(i-1).padEnd(length,'*');
    console.log(`${tri1}     ${tri2}     ${tri3}     ${tri4}`);
}

