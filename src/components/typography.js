/* eslint-disable new-cap */
/* eslint-env browser */
import React, { Component } from "react";
import Radium from "radium";
import { commonGlyphs, primeCache, saturateCache } from "./util/cache";
import measureText from "./util/measure-text";

@Radium
export default class Typography extends Component {
  constructor(props) {
    super(props);

    const cache = primeCache(commonGlyphs());
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "24px Helvetica Neue";

    const OPS_PER_FRAME = 32;
    saturateCache(cache, ctx, OPS_PER_FRAME);

    // console.log(measureText({
    //   text: "Thequickbrownfoxjumpsoverthelazydo",
    //   size: "24px",
    //   family: "Helvetica Neue",
    //   ctx, cache
    // }));

    this.state = { canvas, ctx, cache };
  }

  render() {
    return <p>Wat</p>;
  }
}
