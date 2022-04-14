int1 = prompt("Please enter the first integer");
int2 = prompt("Pleae enter the second integer");
if(int1 > int2 , int1 < 0 , int2 < 0) {
    console.error("You must enter positive integers with starting number less than the ending number")
    console.error("You entered '",int1, "'and '",int2, "'. Click refresh to restart")
}

function multi(int1, int2) {
        let sum = 0;
        for(i = int1; i < int2; i++) {
            if(i % 3 === 0 || i % 5 === 0){
                sum += i;

            }
        }
        return sum - 1;
    }

console.log(multi(int1, int2));
