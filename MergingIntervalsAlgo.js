/*
Common Google Interview Question:
Problem: Given a collection of intervals, 
merge any overlapping intervals and return the resulting collection in ascending order.
*/

//psudo Code//
/*
1. If there is only one interval in the input,
    we don't need to merge anything, so we can return the interval as is.

2. Sort the intervals in order of their starting times, from the smallest to the largest.

3. Start with the first interval and create a list called "merged" with that interval.

4. Go through each interval, starting from the second one.

5. For each interval, check if it overlaps with the last interval in the "merged" list.

6. If the current interval overlaps with the last one, merge them together by extending 
    the end time of the last interval if needed.

7. If the current interval does not overlap, add it to the "merged" list as a separate interval.

8. After going through all intervals, return the "merged" list containing the 
    merged and non-overlapping intervals.

*/

function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
      return intervals; // No need to merge if there are 0 or 1 intervals
    }
  
    intervals.sort((a, b) => a[0] - b[0]); // Sort the intervals based on start times
  
    const merged = [intervals[0]]; // Start the result array with the first interval
  
    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const lastMerged = merged[merged.length - 1];
  
      if (currentInterval[0] <= lastMerged[1]) {
        // Overlapping intervals, update the end time of the last merged interval
        lastMerged[1] = Math.max(lastMerged[1], currentInterval[1]);
      } else {
        // Non-overlapping interval, add it to the result array
        merged.push(currentInterval);
      }
    }
  
    return merged;
  }
  
  // Usage:
  const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
  const mergedIntervals = mergeIntervals(intervals);
  console.log(mergedIntervals);
  
  a