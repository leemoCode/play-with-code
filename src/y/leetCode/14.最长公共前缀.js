// https://leetcode-cn.com/problems/longest-common-prefix/
const solution = (strs) => {
  if (strs.length === 0) {
    return '';
  }

  const findLongestCommonPrefix = (a, b) => {
    console.log('a:', a, 'b:', b);
    if (!a || !b) {
      return '';
    }

    let i = 0;
    while (i < a.length && i < b.length && a.charAt(i) === b.charAt(i)) {
      i++;
    }

    return i === 0 ? '' : a.substring(0, i);
  };

  let longestComommonPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    //core code
    longestComommonPrefix = findLongestCommonPrefix(
      longestComommonPrefix,
      strs[i]
    );
  }

  return longestComommonPrefix;
};

console.log(solution(['flow', 'flower', 'flight']));

const solution2 = (strs) => {
  if (strs.length === 0) {
    return '';
  }

  let curCommonString = strs[0];

  for (const item of strs) {
    let i = 0;
    for (; i < item.length; i++) {
      if (curCommonString[i] !== item[i]) {
        break;
      }
    }

    curCommonString = curCommonString.slice(0, i);

    if (curCommonString === '') {
      return '';
    }
  }

  return curCommonString;
};

console.log(solution2(['flow', 'flower', 'flight']));
