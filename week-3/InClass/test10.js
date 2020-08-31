var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        const haystackArr = haystack[i];
        if (haystackArr === "needle") {
            return haystackArr;
        }
    }
}


console.log(findNeedle(haystack_1));
