/** Display only 100 results for the function */
for (i = 0; i <= 100; i += 1) {
    /**
    * Returns a random integer between 1 and 10
    * @returns {Number} a random integer between 1 and 10
    */
    function rand10() {
        return Math.floor(Math.random() * 10) + 1;
    }
    console.log(rand10());
}