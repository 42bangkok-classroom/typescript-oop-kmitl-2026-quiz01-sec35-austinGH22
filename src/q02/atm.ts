import { ServerResponse } from "http";

const balanceString : string = process.argv[2];
const amounthString : string = process.argv[3];
const balance : number = parseInt(balanceString);
const amount : number = parseInt(amounthString);

if(Number.isNaN(balance)  || Number.isNaN(amount) ){
    console.log("Invalid Input")
}
else{
    if(amount > 5000){
  console.log("Exceeds per-withdrawal limit");
}
else{
  if(amount < balance ){
  console.log(`Withdrawal approved`);
}
  else if(amount > balance){
  console.log(`Insufficient balance`);
}
}
}




// if(amount > 5000){
//   console.log("Exceeds per-withdrawal limit");
// }
// else{
//   if(amount < balance ){
//   console.log(`Withdrawal approved`);
// }
//   else if(amount > balance){
//   console.log(`Insufficient balance`);
// }
// }

