/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    const length = nums.length;
    const answer = [];

    // The trick here is to split the array into two loops: one
    // starting from the left and working forward, the other starting
    // from the right and working backwards.

    // We prefill answer[0] with 1 because we're starting on it, and
    // we need a coefficient to multiply against.
    answer[0] = 1;

    // First we create an array with values equal to each of the
    // _previous_ elements' products. So for [1,2,3,4] we create
    // [1, 1, 2, 6], since [0] is 1, [1] is 1*1, [2] is 1*2, and [3]
    // is [1*2*3].
    for (let i = 1; i < length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    // Now that we've got the products of all values going left, we
    // need to go _back_ over the array in reverse to get the products
    // of all of the indices to the right of i.
    let right = 1;
    for (let i = length - 1; i >= 0; i--) {
        // We're building up a product of all of the values to the 
        // right of nums[i], which we then multiply by the value at
        // nums[i]. Recall that nums[i] is _already_ equal to the
        // product of all of the digits to the left of it, so all that
        // remains is to multiply it by the digits to the right of it.
        answer[i] *= right;
        right *= nums[i];
    }

    return answer
};

const input = [1, 2, 3, 4]
console.log(productExceptSelf(input));