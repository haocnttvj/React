function leapYears(year) {
  // Coding here
  //100 + 400 or 4
  if((year%100 !== 0 || year%400 === 0) && year%4 === 0) {
    return true;
  }else {
    return false;
  }
}
console.log(leapYears(2000)); // is a leap year: returns true
console.log(leapYears(1985));; // is not a leap year: returns false