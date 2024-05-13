function bestFriend(txt, a, b) {
    let textSplit = txt.split(" ");
    let countOccurence = 0;
    for (const word of textSplit) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === a && word[i + 1] === b) {
                countOccurence++;
            }
        }
    }

    if (countOccurence > 1) {
        return true;
    }

    else {
        return false
    }
}

console.log(bestFriend("he headed to the store", "h", "e")); //true
console.log(bestFriend("we found your dynamite", "d", "y")); //false
console.log(bestFriend('abcdee', 'e', 'e')); //false
console.log(bestFriend("i found an ounce with my hound", "o", "u")); //true