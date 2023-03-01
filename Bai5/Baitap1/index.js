let array = [6,9,8,9,7,2]
let averageGrade = 0;

function findAverageGrade(array){
    if(!array || !array.length) return "Lỗi!";

    for (let index = 0;index<array.length;index++){
        averageGrade += array[index];
    }
    averageGrade = (averageGrade/array.length)*10;
}
function grade(averageGrade){
    if(0<=averageGrade && averageGrade <=70) return "Grade: D";
    else if(71<= averageGrade && averageGrade <=79) return "Grade: C";
    else if(81<= averageGrade && averageGrade <=89) return "Grade: B";
    else if(91<= averageGrade && averageGrade <=100) return "Grade: A";
}

findAverageGrade(array);
console.log("11-marks-average-grade");
console.log(grade(averageGrade));
