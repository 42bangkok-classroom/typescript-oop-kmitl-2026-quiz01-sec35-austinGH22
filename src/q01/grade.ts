const score1 : string = process.argv[2];
const grade : number = parseInt(score1);

if (Number.isNaN(grade)){
  console.log("Invalid input");
}
else if (grade < 0 ||grade > 100){
  console.log("Invalid input");
}
else{
  if (grade >= 80){
  console.log("A");
}
else if (grade >= 70 ){
  console.log("B");
}
else if (grade >= 60){
  console.log("C");
}
else if (grade >= 50){
  console.log("D");
}
else if (grade >= 0){
  console.log("F");
}

}




