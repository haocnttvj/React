console.log("tìm số lớn");

let array = [5, 10, 15, 100];

function maxNumber(a,b){
    return a>b ? a : b;
}
console.log("Max Number:",maxNumber(array[0], array[1]));
console.log("Max Number:",maxNumber(array[2], array[1]));
console.log("Max Number:",maxNumber(array[2], array[3]));