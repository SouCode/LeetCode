/* Greed is a dice game played with five six-sided dice. 
Your mission, should you choose to accept it, is to score a 
throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example,
a given "5" can only count as part of a triplet (contributing to the 500 points) 
or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
 */

const score = (dice) => {
    let points = 0;
  
    // Count occurrences of each number in the dice array
    const counts = [0, 0, 0, 0, 0, 0, 0];
    
    for (let num of dice) {
      counts[num]++;
    }
    /* For example, with dice = [5, 1, 3, 4, 1]:
    First iteration: num = 5, so counts[5] is incremented by 1.
    Second iteration: num = 1, so counts[1] is incremented by 1.
    Third iteration: num = 3, so counts[3] is incremented by 1.
    Fourth iteration: num = 4, so counts[4] is incremented by 1.
    Fifth iteration: num = 1 again, so counts[1] is incremented by 1 again.
    */
  
    // Calculate points for triplets
    for (let i = 1; i <= 6; i++) {
      if (counts[i] >= 3) {
        points += i === 1 ? 1000 : i * 100;
        counts[i] -= 3; // Remove the counted triplets
      }
    }
  
    // Calculate points for remaining 1s and 5s
    points += counts[1] * 100;
    points += counts[5] * 50;
  
    return points;
  }
  
console.log(score([5, 1, 3, 4, 1])); // Output: 250
console.log(score([1, 1, 1, 3, 1])); // Output: 1100
console.log(score([2, 4, 4, 5, 4])); // Output: 450
