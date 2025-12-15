import { parseEnv } from "util";

const score1 : string = process.argv[2];
const grade : number = parseInt(score1);

for(let i = 0 ; i<score1.length ; i++){
    let currentscore1 = score1[i]
    let current = parseInt(currentscore1)

    if(Number.isNaN(current)===true){
        console.log(`Invalid Input`)
    }
    
}
if (Number.isNaN(grade)){
  console.log("Invalid Input");
}
else if (grade < 0 ||grade > 100){
  console.log("Invalid Input");
}
else{
  if (grade >= 80){
  console.log("Grade is A");
}
else if (grade >= 70 ){
  console.log("Grade is B");
}
else if (grade >= 60){
  console.log("Grade is C");
}
else if (grade >= 50){
  console.log("Grade is D");
}
else if (grade >= 0){
  console.log("Grade is F");
}

}




