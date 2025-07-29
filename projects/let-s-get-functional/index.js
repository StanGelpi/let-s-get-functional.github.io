// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    const males = _.filter(array, function(customer) {
        return customer.gender === 'male';
    });
       return males.length;
};

var femaleCount = function(array) {
    var females = _.reduce(array,function(accumulator, current) {
        if(current.gender === "female"){
        accumulator++
        } 
        return accumulator
    }, 0);  
    return females;
}

var oldestCustomer = function(array){
    const oldest = _.reduce(array, function(acc, current){
        // Determine if the iterable value to the "age" key is greater than the accumulaor's 
        if (current.age > acc.age) {
            // if so, assign "name" to  the iterable object's "name"value
            return current
        } else {
            // Else assign var name to acc's "name' value"
            return acc
        } 
        
    }, array[0]);
  
    return oldest.name

}

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(acc, current){
        if (current.age < acc.age){
            return current
        } else {
            return acc
        }
    }, array[0]);

    return youngest.name
}

var averageBalance = function(array) {
    let balance = _.reduce(array, function(sum, current) {
        return sum + current.balance
    }, 0) 
    return balance / array.length
}

var firstLetterCount = function(array, letter) {
    const sameStart = _.filter(array, function(customer) {
        if (customer.name[0].toUpperCase() === letter.toUpperCase()) {
            return customer
        } 
    }); return sameStart.length
}

var friendFirstLetterCount = function(array, customer, letter){
    // set up some placeholder arrays
    let cust = [];
    let match = []
    // isolate the "given" customer
    for (var i = 0; i < array.length; i++) {
        if (array[i].name === customer) {
            //assign customer's friends array to vatriable
            let cust = array[i].friends
        }
    }  // breathe
       // iterate through array of friends
    for (var x = 0; x < cust.length; x++)
         // set up conditional(test) for iteration
           if (cust[x].name[0].toUpperCase() === letter.toUpperCase()){   
             match.push(cust[x].name)
          }return match.length
         }         
 

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
