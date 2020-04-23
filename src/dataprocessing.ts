export const avg = (nums: number[]) => {
    if (!nums)
        return 0;

    let sum = nums.reduce((a,b) => a+b, 0);
    return sum / nums.length;
}

export const arrAvg = (nums: number[], window: number = 5) => {
    const range = Math.floor(window);
    const below = Math.floor(range / 2);
    const above = range - below;

    const numsLen = nums.length;

    return nums.map((num, idx) => 
        avg(nums.slice(
            Math.max(0, idx - below), 
            Math.min(numsLen, idx + above)))
    );
}