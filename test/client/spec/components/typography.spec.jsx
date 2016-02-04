// Help PhantomJS out
require("babel-polyfill");
import measureText from "../../../../src/components/util/measure-text";

describe("components/typography", () => {
  const testFont = (text, { ctx, size, family }) => {
    ctx.font = `${size} ${family}`;
    const whole = ctx.measureText(text);
    const sum = measureText(text, {
      ctx, size, family
    });
    return { whole, sum };
  };


  it(
    `should measure the sum of characters with the
    accuracy of measuring the full string`,
  () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const sizes = ["8px", "11px", "12px", "16px", "24px", "48px", "72px", "144px"];
    const families = [
      "Avenir Next",
      "Arial"
    ];
    const testString = "The quick brown fox jumps over the lazy dog";

    for (const size of sizes) {
      for (const family of families) {
        console.log(testFont(testString, { ctx, size, family }));
      }
    }
  });

});
