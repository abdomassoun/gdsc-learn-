let all:(string|number)="Hello World" ; 

all="Hello World";
all=1;

let name1: string;

name1="Hello World";
name1=1;

// 
function sum(...num:number[]){
    let result=0;
    num.forEach((value)=>{
        result+=value;
    });
    return result;
}