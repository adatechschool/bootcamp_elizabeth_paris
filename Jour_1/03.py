def countOccu(e,tab):
    occu = 0
    for i in tab:
        if i == e :
            occu += 1
    return occu

def majority(arr):
    dict = {}
    for e in arr:
        occu = countOccu(e, arr)
        dict[e] = occu
    
    max = (0,0)
    for k , v in dict.items():
        if v > max[1]:
            max = (k,v)
    
    for e in dict:
        if dict[e] == max[1] :
            break
        else :
            return max[0]

    count_even = 0
    for e in arr :
        if e%2 == 0 :
            count_even+=1
    if count_even > len(arr)/2:
        return "pairs"
    elif len(arr) - count_even > len(arr)/2:
        return "impairs"
    else:
        return "pas de majo"



print(majority([3,1,4,1]))
print(majority([33,44,55,66,77]))
print(majority([1,2,3,4]))