(function () {
    "use strict";

    /*Write a loop that plays "99 bottles of beer" song.
    It should say bottle instead of bottles when there's only one,
    and the song is over when there are 0 bottles.*/

        for (var num = 99; num >= 0; num--){
            var minus = num - 1;
            if (num === 0){
                console.log("No more bottles of beer on the wall! \nNo more bottles of beer!");
                console.log("We took them all down and passed them around,\n now no more bottles of beer on the wall!");
            } else if (num === 1) {
                console.log(num + " bottle of beer on the wall. \n" + num + " bottle of beer!");
                console.log("Take one down\npass it around\n " + minus + " bottles of beer on the wall!");
            } else {
                console.log(num + " bottles of beer on the wall. \n" + num + " bottles of beer!");
                console.log("Take one down\npass it around\n " + minus + " bottles of beer on the wall!");
            }
        }

})();