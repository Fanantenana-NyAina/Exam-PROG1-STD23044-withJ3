function getTotalScore(array1, array2) {
    let countScore = 0;
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (i === j) {
                if (array1[i] === array2[j]) {
                    countScore += 4;
                }

                else if (array1[i] !== array2[j]) {
                    if (array2[j] === "") {
                        countScore += 0;
                    }

                    else {
                        countScore -= 1;
                    }
                }
            }


        }
    }

    return countScore;
}

console.log(getTotalScore(["a", "a", "b", "b"], ["a", "c", "b", "d"]));