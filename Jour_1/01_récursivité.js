// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.


const waysRunUp = (totalOfSteps) => {
    if(totalOfSteps < 0) return 0;
    if(totalOfSteps === 0) return 1;

    return waysRunUp(totalOfSteps - 1) + waysRunUp(totalOfSteps - 2) + waysRunUp(totalOfSteps - 3);  
}

console.log(waysRunUp(18));