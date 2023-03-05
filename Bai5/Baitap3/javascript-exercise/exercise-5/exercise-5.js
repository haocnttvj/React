function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // Coding here
    return submittedUsers.every(function(submittedUser) { //check xem tat ca cac sumited co o trong good k (can tat ca)
      return goodUsers.some(function(goodUser) { // check xem good = summited k (chi can 1)
        return goodUser.id === submittedUser.id;
      });
    });
  };
}
var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers);

console.log(testAllValid([{ id: 2 }, { id: 1 }]));
// => true

console.log(testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]));
// => false