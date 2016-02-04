// const pairwise = (list) => {
//   return list.reduce((acc, current, index) => {
//     if (index % 2 === 0) {
//       return [...acc, current];
//     }
//     return [...acc, acc[acc.length - 1]];
//   }, []);
// };

const pairwise = (list) => {
  if (list.length < 2) {
    return [];
  }
  const first = list[0];
  const rest = list.slice(1);
  const pairs = rest.map((x) => [first, x]);
  return pairs.concat(pairwise(rest));
};

export default pairwise;

// function pairwize(arr) {
//     return arr.reduce(function(acc, current, index) {
//         var isFirstPair = (index % 2) === 0;

//         if (isFirstPair) {
//             acc.push([current]);
//         } else {
//             lastElement = acc[acc.length - 1];
//             lastElement.push(current);
//         }

//         return acc;
//     }, []);
// };
