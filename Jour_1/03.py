def countOccurrence(element, tab):
    occurrence = 0
    for i in tab:
        if i == element:
            occurrence += 1
    return occurrence


def findUniqueMax(dict):
    keyMax, valueMax = 0, 0
    nb_of_keymax = 1
    for k, v in dict.items():
        if v > valueMax:
            keyMax, valueMax = k, v
            nb_of_keymax = 1
        elif v == valueMax:
            nb_of_keymax += 1
    if nb_of_keymax > 1:
        return nb_of_keymax, None
    return keyMax, valueMax


def countEven(tab):
    count = 0
    for element in tab:
        if element % 2 == 0:
            count += 1
    if count > len(tab) / 2:
        return "pairs"
    elif len(tab) - count > len(tab) / 2:
        return "impairs"
    else:
        return "pas de majo"


def majority(arr):
    dict = {}

    for element in arr:
        if element not in dict:
            occu = countOccurrence(element, arr)
            dict[element] = occu

    keymax, valueMax = findUniqueMax(dict)

    if valueMax != None:
        return keymax

    return countEven(arr)


print(majority([3, 1, 4, 1]))  # 1
print(majority([33, 44, 55, 66, 77]))  # impairs
print(majority([1, 2, 3, 4]))  # pas de majo
