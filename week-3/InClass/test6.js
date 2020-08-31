function findSmallestInt(args) {

    var smallInt = args[0];

    for (var i = 0; i < args.length; i++) {

        if (args[i] <= smallInt) {
            smallInt = args[i];
        }

    }

    //return (smallInt);  
    console.log(smallInt);

}

findSmallestInt([2, 8, 10, 14, 1, 0]);
findSmallestInt([12, 8, 1, 5, 1, 7]);
findSmallestInt([22, 4, 58, -3, 99, 100]);
