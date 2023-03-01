let arr1 = [1, 2, 3, 4];
let arr2 = [0, 10];

let arr3 = [3, 1];
let arr4 = [6, 0];

let arr5 = [1, 2, 3];
let arr6 = [2, 3];

function findMaxNumber(numbers){
    if (!numbers || !numbers.length) return "Lỗi";

    let max = numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(max<numbers[i]) max = numbers[i];
    }

    return max;
}

function findMinNumber(numbers){
    if (!numbers || !numbers.length) return "Lỗi";

    let min = numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(min>numbers[i]) min = numbers[i];
    }
    
    return min;
}

function canNest(a1, a2){
    if(findMinNumber(a1) > findMinNumber(a2) && findMaxNumber(a1) < findMaxNumber(a2)) return true;
        else return false;
}
console.log(canNest(arr1,arr2));
console.log(canNest(arr3,arr4));
console.log(canNest(arr5,arr6));
