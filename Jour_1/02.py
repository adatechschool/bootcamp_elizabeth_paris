def isAllCharUnique(str):
    charSet = set()
    for char in str:
        if char in charSet:
            return False
        charSet.add(char)
    return True

def idemMaisPlusCourt(str):
    arr = [*str]
    charSet = set(arr)
    return len(arr) == len(charSet)

print(isAllCharUnique('cou'))
print(isAllCharUnique('coucou'))

print(idemMaisPlusCourt('cou'))
print(idemMaisPlusCourt('coucou'))