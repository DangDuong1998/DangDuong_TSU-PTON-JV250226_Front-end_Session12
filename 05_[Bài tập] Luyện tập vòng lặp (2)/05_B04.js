let height = 7;
let width = 21;
let i;
let shape = '' ;
for(i=1;i<=height;i++){
    if(i === 1 || i === height){
        shape += '*'.repeat(width) +'\n';  
    }
    else{
        shape += '*' +' '.repeat(width-2)+'*' +'\n';
    }
  
}
console.log(shape);
