function repeatString(string, num) {
  // Coding here
  var repeat="";
  while(num>0){
    num--;
    repeat += string;
  }
  return repeat;
}
console.log(repeatString("hey", 3));