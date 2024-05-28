def countOccu(e,tab):
    occu = 0
    for i in tab:
        if i == e :
            occu += 1
    return occu

def findMax(dict):
    keyMax, valueMax = 0,0
    for k, v in dict.items():
        if v > valueMax:
            keyMax, valueMax = k, v
    return keyMax, valueMax

def isMaxAlone (dict, keyMax, valueMax) :
    for key in dict:
        if dict[key] == valueMax and key != keyMax:
            return False
    return True

def countEven (tab) :
    count = 0
    for e in tab:
        if e%2 == 0:
            count +=1
    if count > len(tab) / 2:
        return "pairs"
    elif len(tab) - count > len(tab) / 2:
        return "impairs"
    else:
        return "pas de majo"

def majority(arr):
    dict = {}

    for e in arr:
        occu = countOccu(e, arr)
        dict[e] = occu

    keymax, valueMax = findMax(dict)
        
    if isMaxAlone(dict, keymax, valueMax):
        return keymax
    
    return countEven(arr)



print(majority([3,1,4,1]))
print(majority([33,44,55,66,77]))
print(majority([1,2,3,4]))