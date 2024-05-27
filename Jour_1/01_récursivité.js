// A child is running up a staircase with n steps and can hop
// either 1 step, 2 steps, or 3 steps at a time.
// Implement a method to count how many possible ways the child can run up the stairs.


let hopNumber = 0;
function recursion(steps) {
    if (steps >= 1) {
        hopNumber ++
        steps -= 1;
        return recursion(steps)
    }
    return hopNumber
}

console.log(recursion(10))