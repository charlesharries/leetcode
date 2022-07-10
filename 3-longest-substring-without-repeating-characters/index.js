/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    const letterCountsInWindow = {};
    let maxLetterCount = 0;

    while (end < s.length) {
        // First, walk the end of the window forward.
        letterCountsInWindow[s[end]] = letterCountsInWindow[s[end]] || 0;
        letterCountsInWindow[s[end]] += 1;

        // Start walking the start forward.
        while (letterCountsInWindow[s[end]] > 1) {
            // The window is now shorter by one letter, so remove that
            // letter from our hash.
            letterCountsInWindow[s[start]] -= 1;

            // And then move the start forward.
            start += 1;
        }

        maxLetterCount = Math.max(maxLetterCount, end - start + 1)

        end += 1;
    }

    return maxLetterCount;
};

const input = "nfpdmpi";
console.log(lengthOfLongestSubstring(input));