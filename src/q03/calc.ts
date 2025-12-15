import { parse } from "path";
//operator 
const inputOperator : string = process.argv[2];
//num1 
const num2String  : string = process.argv[3]
const num2 : number = parseInt(num2String);
//num2 
const num4String : string = process.argv[4]
const num4 : number = parseInt(num4String);

const operator = inputOperator.toLowerCase() ;
switch(operator){
  case "add" :
    console.log(num2+num4 + '');
    break ;
  case "sub" :
    console.log(num2-num4 + '');
    break ;
  case "mul":
    console.log(num2 * num4+ '');
    break;
  case "div":
    console.log(num2/num4+ '');
    break;
}

