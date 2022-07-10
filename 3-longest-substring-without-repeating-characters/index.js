/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let maxWindow = "";
    const letterCountsInWindow = {};
    let maxLetterCount = 0;

    while (end < s.length) {
        // First, walk the end of the window forward.
        letterCountsInWindow[s[end]] = letterCountsInWindow[s[end]] || 0;
        letterCountsInWindow[s[end]] += 1;

        if (letterCountsInWindow[s[end]] > maxLetterCount) {
            maxLetterCount = letterCountsInWindow[s[end]];
        }

        if (maxLetterCount < 2) {
            const potentialWindow = s.substring(start, end+1);
            if (potentialWindow.length > maxWindow.length) {
                maxWindow = potentialWindow;
            }
        }

        // Start walking the start forward.
        while (maxLetterCount > 1) {
            const windowLength = end - start + 1;

            if (windowLength > maxWindow.length) {
                maxWindow = s.substring(start, end);
            }

            // The window is now shorter by one letter, so remove that
            // letter from our hash.
            letterCountsInWindow[s[start]] -= 1;

            if (letterCountsInWindow[s[start]] > 0) {
                maxLetterCount -= 1;
            }

            start += 1;
        }

        end += 1;
    }

    return maxWindow.length
};

const input = "nfpdmpi";
console.log(lengthOfLongestSubstring(input));