(function () {
    "use strict";

    /*Write a loop that plays "99 bottles of beer" song.
    It should say bottle instead of bottles when there's only one,
    and the song is over when there are 0 bottles.*/

        // for (var num = 99; num >= 0; num--){
        //     var minus = num - 1;
        //     if (num === 0){
        //         console.log("No more bottles of beer on the wall! \nNo more bottles of beer!");
        //         console.log("We took them all down and passed them around,\n now no more bottles of beer on the wall!");
        //     } else if (num === 1) {
        //         console.log(num + " bottle of beer on the wall. \n" + num + " bottle of beer!");
        //         console.log("Take one down\npass it around\n " + minus + " bottles of beer on the wall!");
        //     } else {
        //         console.log(num + " bottles of beer on the wall. \n" + num + " bottles of beer!");
        //         console.log("Take one down\npass it around\n " + minus + " bottles of beer on the wall!");
        //     }
        // }

    // Write the loop and code necessary to sum all integers between 1 to 100

    // for (var num = 1; num < 101; num+= 1 ){
    //     console.log(num);
    // }

    /*Write a loop that starts at 1 and goes to 100. Each # that's a multiple of 3, output the string "Fizz". Each # that's a multiple of 5, output "Buzz". For numbers that are multiples of both 3 & 5, output "FizzBuzz". Everything else, output the number itself. */

    for (var num = 1; num < 101; num += 1){
        if ((num % 3 === 0) && (num % 5 === 0)){
            console.log("FizzBuzz");
        } else if (num % 3 === 0){
            console.log("Fizz");
        } else if (num % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(num);
        }
    }
})();