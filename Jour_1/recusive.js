
//recusive function
// 1. lets start  At zero stairs case
 //2.  Initialize an array to store the number of ways to reach each step using (.fill)
// 2. retarate through the Ways to reach i = ways up the stairs cases. use (for boucle.)
// do me a console.log


function countWays(n) {
    if (n === 0) { 
        return 1;
    }

    let ways = new Array(n + 1).fill(0);

    ways[0] = 1;  // (take no step)
    ways[1] = 1;  // (take one step from the first step)
    ways[2] = 1;  // (take one step twice from the first two steps)

    for (let i = 3; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2] + ways[i - 3]; // Ways to reach i = ways to
         
    }

    return ways[n];
}

console.log(countWays(4)); 


