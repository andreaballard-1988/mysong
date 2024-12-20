function printedSong () {
    console.log("Happy birthday to you,\n");
    console.log("Happy birthday to you,\n");
    console.log("Happy birthday to emerson,\n");
    console.log("Happy birthday to you!\n");
}

function refrain(){

console.log("Happy birthday to you,\n");

console.log("Happy birthday to emerson, \n");

refrain();

}

song();

function refactoredRefrain() {

return "Happy birthday to you,";

}

function refactoredSong (){

    console.log(refrain());
    console.log("Happy birthday to emerson");
    console.log(refrain());

}
refactoredSong();