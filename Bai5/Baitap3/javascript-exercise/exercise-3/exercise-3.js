function removeFromArray(array, deleteItem) {
  // Coding here
  var place;
  for(let i=0;i<array.length;i++){
    if(array[i] == deleteItem) {place = i; break}
  }
  array.splice(place,1);
  console.log(array);
}
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
