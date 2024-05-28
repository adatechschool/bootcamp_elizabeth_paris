def count(n):   ## compte le nb de façon de monter n marches

    if n == 0:      ## il n y a aucune marche, il y a donc qu'un truc à faire
        return 1
    if n < 0 :      ##  impossible 
        return 0
    
    return count(n-1) + count(n-2) + count(n-3)     ##  si n>0, on compte le nombre de façon de monter n-1 marches, n-2 marches et n-3



print(count(5))


