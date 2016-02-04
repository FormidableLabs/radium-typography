const measureText = ({ text, size, family, ctx, cache }) => {
  ctx.font = `${size} ${family}`;

  const pairs = text
    .split("")
    .map((glyph, index, list) => {
      if (index % 2 !== 0) {
        return null;
      }
      if (!list[index + 1]) {
        return glyph;
      }
      return glyph + list[index + 1];
    })
    .filter((pair) => pair);

  const measurements = pairs
    .map((pair) => {
      if (cache[pair]) {
        console.log("Cache hit");
        return cache[pair];
      }
      console.log("Cache miss");
      return ctx.measureText(pair).width;
      // return cache[pair]
      //   ? cache[pair]
      //   : ctx.measureText(pair).width;
    });

  console.log(measurements);

  const width = measurements.reduce(
    (acc, current) => acc + current
  );
  const height = parseInt(size.replace(/\D/g, ""), 10);

  return { width, height };
};

export default measureText;
