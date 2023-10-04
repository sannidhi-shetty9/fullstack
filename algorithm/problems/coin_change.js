/*
Coin change
The "Coin Change" problem is a classic algorithmic problem that involves finding the minimum number of coins needed to make up a given amount of money. It's a common variation of the knapsack problem and can be efficiently solved using dynamic programming. The problem statement can be summarized as follows:
Problem Statement:
Given an array of coin denominations and a target amount, find the minimum number of coins needed to make up the target amount. You have an infinite supply of coins for each denomination.
Example:
Suppose you have coin denominations [1, 5, 10, 25] (representing cents) and you want to make 63 cents. The minimum number of coins needed would be 6: three 25-cent coins and three 1-cent coins.
Solution Approach (Dynamic Programming):
The coin change problem can be efficiently solved using dynamic programming. The idea is to build up the solution iteratively, considering each coin denomination and calculating the minimum number of coins needed for each target amount from 0 to the given target amount.
Here's a general outline of the dynamic programming solution:
1. Create an array `dp` of size `(target_amount + 1)` initialized with a value larger than any possible solution.
2. Initialize `dp[0]` to 0, since the minimum number of coins needed to make zero cents is zero.
3. For each coin denomination `coin` in the array:
   - Iterate through the `dp` array from `coin` to `target_amount`.
   - Update `dp[i]` with the minimum of its current value and `dp[i - coin] + 1`.
4. The value of `dp[target_amount]` will represent the minimum number of coins needed to make up the target amount.

Here's a js code snippet that implements the dynamic programming solution:
*/

function minCoins(coins, targetAmount) {
  const dp = new Array(targetAmount + 1).fill(Infinity);
  dp[0] = 0;
  console.log('dp: ',dp.toString() )
  for (const coin of coins) {
    for (let i = coin; i <= targetAmount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      console.log(dp.toString(),"|", coin, i, dp[i], dp[i-coin])
    }
    console.log('-------------')
  }

  return dp[targetAmount];
}

// Example usage
let coinDenominations = [2, 5, 10, 25];
let targetAmount = 64;
coinDenominations = [1,2,3];
targetAmount = 7;
const minNumCoins = minCoins(coinDenominations, targetAmount);
console.log(`Minimum number of coins: ${minNumCoins}`); // Output: Minimum number of coins: 6

/*
 this JavaScript code defines a function minCoins that takes an array of coin denominations and a target amount as input. It uses dynamic programming to calculate the minimum number of coins needed to make up the target amount. The outer loop iterates through each coin denomination, and the inner loop updates the dp array to store the minimum number of coins needed for each target amount.

This dynamic programming approach efficiently solves the coin change problem by considering each coin denomination and calculating the minimum number of coins needed for each target amount.
*/
