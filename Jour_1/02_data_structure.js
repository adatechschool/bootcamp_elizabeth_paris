"use strict";
const findDuplicate = (s) => {
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                return false;
            }
        }
    }
    return true;
};