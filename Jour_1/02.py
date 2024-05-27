def isAllCharUnique(str):
    charSet = set()
    for char in str:
        if char in charSet:
            return False
        charSet.add(char)
    return True

print(isAllCharUnique('cou'))
print(isAllCharUnique('coucou'))