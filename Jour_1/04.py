import numpy as np

def flipArr(mat, str):
    if str == "horizontal":
        return np.flip(mat,1)
    elif str == "vertical":
        return np.flip(mat,0)
    else :
        return "mode incorrecte"
    

array = [
[1,2,3],
[4,5,6],
[7,8,9]
]
print(flipArr(array, 'horizontal'))
print(flipArr(array, 'vertical'))