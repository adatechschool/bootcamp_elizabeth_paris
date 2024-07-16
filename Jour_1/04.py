import numpy as np


def ezFlip(mat, str):
    if str == "horizontal":
        return np.flip(mat, 1)
    elif str == "vertical":
        return np.flip(mat, 0)
    else:
        return "mode incorrecte"


def flipArr(arr, str):
    rep = []
    if str == "horizontal":
        for list in arr:
            reversed = list[::-1]
            rep.append(reversed)
        return rep
    elif str == "vertical":
        rep = arr[::-1]
        return rep
    else:
        return "mode incorrecte"


array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(flipArr(array, 'horizontal'))
print(flipArr(array, 'vertical'))
