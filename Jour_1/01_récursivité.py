# A child is running up a staircase with n steps
# and can hop either 1 step, 2 steps, or 3 steps at a time. 
# Implement a method to count how many possible ways the child can run up the stairs.

# NB : recursion refers to a function that is calling itself in its own definition (self-referential definition)
#      used when a task can be broken down into smaller instances of the same task, up to the point where their is not further need of recursion. 

# Each "inner" call of a factorial function may change the value of the parameter 

# Input : n (int) as number of steps  
# Output : w (int) as number of valid patterns, where valid is addition of 1, 2 or 3 equal to n 


# parameter n need to remains constant across recursive calls but other variables must change. 
# => variable w as number of time the factorial runs.

# I NEED : 
# - a condition for looping --> another pattern is possible
# - a condition for breaking out --> no more possible pattern 
# - a way to count the number of time the recursion has been called --> int variable incrementing 
# - defining an operation that can be done again and again :
#   The sum of the num of ways to climb n-1, n-2 or n-3 steps, accounting for all possible combination of taking 1, 2 or 3 steps at time. 



# calculate how many steps if only hoping by 1
def test(n, count=1):
    print("count here", count)
    if n == 0:   # "base case"
        print("count there", count)
        return count
    else:
        print("n", n)
        print("count", count)
        return n - test(n-1, count + 1)
    
    
# print(test(10))

# patterns (5) = [A] patterns(n-1) + [B] patterns(n-2) + [C] patterns(n-3)
# [A] : patterns (4) = patterns(3) + patterns (2) + patterns(1)
# [B] : patterns (3) = patterns(2) + patterns (1) + patterns (0)
# [C] : patterns (2) = patterns (1) + patterns (0)

def patterns(n):
    # "base case"
    if n == 0:   
        return 1
    elif n < 0:
        return 0
    
    print("n", n)
    return patterns(n-1) + patterns(n-2) + patterns(n-3)
    
print(patterns(5))


