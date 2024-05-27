"use strict";
function pathFinder(n) {
    if (n < 0)
        return 0;
    if (n === 0)
        return 1;
    return pathFinder(n - 1) + pathFinder(n - 2) + pathFinder(n - 3);
}
