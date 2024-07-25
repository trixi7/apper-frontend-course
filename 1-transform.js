function transform(nums) {
    nums.sort()

    for(let i=0; i<nums.length; i++){
        nums[i] = nums[i]*nums[i]
    }
    
    return nums
}

const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums) 