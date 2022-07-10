/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    const letterIndices = {};
    let maxLetterCount = 0;

    // Iterate through the whole string exactly _once_.
    for (let end = 0; end < s.length; end++) {

        // If the end of the window finds a letter that already exists
        // in our letterIndices, then we need to move the _start_ of
        // the window to the latest instance of that letter index. We
        // can skip over any intervening letters because they won't
        // cause the start of the window to move.
        if (s[end] in letterIndices) {
            start = Math.max(letterIndices[s[end]], start);
        }

        // Once that's done, we recalculate the max letter count,
        // updating it if it's larger that what we've already found.
        maxLetterCount = Math.max(maxLetterCount, end - start + 1);

        // And increment our letterIndices on the letter we've just
        // processed.
        letterIndices[s[end]] = end + 1;
    }

    return maxLetterCount;
};

const input = "abba";
console.log(lengthOfLongestSubstring(input));