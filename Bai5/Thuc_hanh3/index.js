let numbers = [1,9,5,31,7];

function findMaxNumber(numbers){
    if (!numbers || !numbers.length) return "Lỗi";

    let max = numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(max<numbers[i]) max = numbers[i];
    }

    return max;
}

console.log("Max number of array:",findMaxNumber(numbers));