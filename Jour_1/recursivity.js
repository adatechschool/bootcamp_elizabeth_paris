// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.
//  Implement a method to count how many possible ways the child can run up the stairs.

function howManyWay(stepsNumber){


    if (stepsNumber === 0){
        return 1
    }

    if (stepsNumber === 1){
        return 1
    }

    if (stepsNumber === 2){
        return 2
    }
    

   return howManyWay(stepsNumber-1) + howManyWay(stepsNumber-2)+ howManyWay(stepsNumber-3)
}


console.log(howManyWay(8))