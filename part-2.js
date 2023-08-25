// 1) Sum Zero

let addToZero = array => {
    let boolean = false
    for(let i = 0; i<array.length; i++){
        for(let j = i+1; j<array.length; j++){
            if(array[i] + array[j] === 0){
                boolean = true
            }
        }
    }
    console.log(boolean)
}

// space complexity: O(1) - The space complexity is constant because the function uses a fixed amount of memory regardless of the input size.

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True


// |******************************************************************|


// 2) Unique Characters

let hasUniqueChars = string => {
    let isUnique = true
    for(let i = 0; i<string.length; i++){
        for(let j = i+1; j<string.length; j++){
            if(string.charAt(i) === string.charAt(j)){
                isUnique = false
            }
        }
    }
    console.log(isUnique)
}

// space complexity: O(1) - The space complexity remains constant because the function uses a fixed amount of memory and it doesn't scale with the input size.

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False


// |******************************************************************|


// 3) Pangram Sentence

let isPangram = string => {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let stringSet = new Set(string)
    let isContains = true

    for(let char of alphabets){
        if(!stringSet.has(char)){
            isContains = false
        }
    }
    console.log(isContains)
}

// space complexity: O(n) - The space complexity here is linear in terms of the length of the input string. The stringSet will scale based on the number of unique characters present in the input string.

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False


// |******************************************************************|


// 4) Longest Word

let findLongestWord = words => {
    let longestWord = 0
    for(let i = 0; i<words.length-1; i++){
        if(words[i].length > words[i+1].length){
            longestWord = words[i].length
        }else{
            longestWord = words[i+1].length
        }
    }
    console.log(longestWord)
}

// space complexity: O(n) - This function has linear space complexity since the memory used increases with the size of the input array. However, the longestWord variable itself doesn't significantly affect the space complexity.

findLongestWord(["hi", "hello"]);
// -> 5

findLongestWord(["hellllllo", "hi", "hello", "hellloooooo"]);
// -> 11