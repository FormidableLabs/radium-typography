/* eslint-env browser */
import range from "lodash.range";
import pairwise from "./pairwise";

export const commonGlyphs = () => {
  const ALPHABET_SIZE = 26;
  const ALPHABET_OFFSET = 97;
  const numerals = Array.from(Array(9).keys())
    .map((num) => num.toString());
  const punctuation = [".", ",", ":", ";"]; // TODO
  const alphabet = Array.from(Array(ALPHABET_SIZE).keys())
    .map((code) => String.fromCharCode(code + ALPHABET_OFFSET))
    .map((letter) => [letter, letter.toUpperCase()])
    .reduce((acc, pairs) => acc.concat(pairs));
  return [...numerals, ...punctuation, ...alphabet];
};

export const primeCache = (glyphs) => {
  return pairwise(glyphs)
    .map((pair) => pair.reduce(
      (acc, current) => acc + current
    ))
    .reduce((acc, pair) => {
      const reverse = pair.split("").reverse().join("");
      return { ...acc, [pair]: 0, [reverse]: 0 };
    }, {
      whitespace: 0
    });
};

export const saturate = function * (cache, ctx) {
  for (const pair of Object.keys(cache)) {
    yield cache[pair] = ctx.measureText(pair).width;
  }
};

export const saturateCache = (cache, ctx, ops) => {
  console.time("Saturate cache");

  let timerToken;
  const saturator = saturate(cache, ctx);

  const saturateTimer = () => {
    for (const i of range(0, ops)) { // eslint-disable-line no-unused-vars
      if (saturator.next().done) {
        console.timeEnd("Saturate cache");
        cancelAnimationFrame(timerToken);
        return;
      }
    }

    timerToken = requestAnimationFrame(saturateTimer);
    return;
  };
  saturateTimer();
};
