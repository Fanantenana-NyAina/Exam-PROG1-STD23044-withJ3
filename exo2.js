function getTotalScore(array1, array2) {
    let countScore = 0;
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                countScore += 4;
                break;
            }
            if (array2 === "") {
                countScore += 0;
                break;
            }
            else {
                countScore -= 1;
                break;
            }
        }
    }

    return countScore;
}

let array1 = ["a", "a", "b", "b"];
let array2 = ["a", "c", "b", "d"];
console.log(getTotalScore(array1, array2));