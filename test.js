function myAverage(nums) {
    let total = 0;
    for(let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    const avg = total/nums.length;
    return avg;
}

const nums = [1,2,3,1,2, 3];
const nums2 = [100, 399, 38729, 472, 4972, 2873];
const nums3 = [1, 399, 6, 8, 0, 998];

const avg1 = myAverage(nums);
const avg2 = myAverage(nums2);
const avg3 = myAverage(nums3);

console.log(avg1 + avg2 + avg3);



