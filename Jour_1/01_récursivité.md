A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

1 step: 1
1

2 steps: 2
2 
1 -> 1

3 steps : 4
3 
2 -> 1 
1 -> 2 | 1 -> 1 -> 1

4 steps : 7
3 -> 1 
2 -> 2 | 2 -> 1 -> 1 
1 -> 3 | 1 -> 2 -> 1 | 1 -> 1 -> 2 |1 -> 1 -> 1 -> 1

5 steps :  
3 -> 2 | 3 -> 1 -> 1  
2 -> 3 | 2 -> 2 -> 1 | 2 -> 1 -> 2
1 -> 3 -> 1 | 1 -> 2 -> 2 | 1 -> 2 -> 1 -> 1 | 1 -> 1 -> 3 | 1 -> 1 -> 2 -> 1 | 1 -> 1 -> 1 -> 2 | 1 -> 1 -> 1 -> 1 -> 1

