/**
 생각의 흐름: 1, 2, 5로 모두 recursive로 찾자니 중복이 발생한다. 중복만 좀 제거하면 괜찮을 것 같은데
 1만 쓴 것
 최소한 2도 한 번 쓴 것
 - 2는 일단 쓰고
 - (3, [1,2]) 를 리컬시브하되 결과를 캐싱해놓을까?



 최소한 5도 한 번 쓴 것


 1만 쓴 것의 결과를 다른 곳에서도 쓸 수 있을텐데

 **/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */


const getPrefixAddedWays = (ways, prefix) => {
  return ways.map(r => [...[prefix], ...r]);
};

const getWays = (amount, coins) => {
  if (amount < 0) return [];
  if (coins.length === 1 && coins[0] === amount)
    return [[coins[0]]];
  let results = [];
  for (let i = 0; i < coins.length; i++) {
    const subCoins = coins.slice(0, i + 1);
    const coinShouldBeUsed = coins[i];
    let toBeAddedWays = [];
    if (amount === coinShouldBeUsed) {
      toBeAddedWays = [[coinShouldBeUsed]];
    } else {
      toBeAddedWays = getPrefixAddedWays(getWays(amount - coinShouldBeUsed, subCoins), coinShouldBeUsed);
    }
    results = [
      ...results,
      ...toBeAddedWays,
    ];
  }
  return results;
};

const filterAndSortCoins = (amount, coins) => {
  const filtered = coins.filter(r => r <= amount);
  return filtered.sort((a, b) => a - b);
};

var change = function(amount, coins) {
  coins = filterAndSortCoins(amount, coins);

  const ways = getWays(amount, coins);
  return ways.length;
};

const result = change(500, [3,5,7,8,9,10,11]);
console.log("[JONGMAN_LOG] result", result, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));