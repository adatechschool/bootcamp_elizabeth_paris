"use strict";
const flip = (a, direction) => {
    function rowFlip(r) {
        for (let i = 0; i < Math.floor(r.length / 2); i++) {
            [r[i], r[r.length - 1 - i]] = [r[r.length - 1 - i], r[i]];
        }
        return r;
    }
    if (direction === "horizontal") {
        for (let row of a) {
            // juste une ligne
            rowFlip(row);
        }
    }
    if (direction === "vertical") {
        rowFlip(a);
    }
    return a;
};
console.log(flip([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
], "horizontal"));
