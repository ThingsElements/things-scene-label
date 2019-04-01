/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

// 참고 웹페이지.
// http://www.neodynamic.com/Products/Help/BarcodeWinControl2.5/working_barcode_symbologies.htm
// const BARCODE_REGEXP = {
//   'code11': /^[0-9\-]*$/,
//   'codebar': /^[A-D][0-9\+$:\-/.]*[A-D]$/,
//   'code39': {
//     'normal': /^[0-9A-Z\-.$/\+%\*\s]*$/,
//     'extended': /^[\000-\177]*$/
//   },
//   'code93': {
//     'normal': /^[0-9A-Z\-.$/\+%\*\s]*$/,
//     'extended': /^[\000-\177]*$/
//   },
//   'code128': {
//     'auto': /^[\000-\177]*$/,
//     'A': /^[\000-\137]*$/,
//     'B': /^[\040-\177]*$/,
//     'C': /^(([0-9]{2})+?)*$/
//   },
//   'datamatrix': /^[\x00-\xff]*$/, // 멀티바이트 캐릭터는 안됨 ?
//   'ean8': /^\d{1,}$/,
//   'ean13': /^\d{1,}$/,
//   'industrial2of5': /^\d{1,}$/,
//   'interleaved2of5': /^\d{1,}$/,
//   'isbn': /((978[\--– ])?[0-9][0-9\--– ]{10}[\--– ][0-9xX])|((978)?[0-9]{9}[0-9Xx])/,
//   'msi': /^\d{1,}$/,
//   'pdf417': {
//     'text-compaction': /^[\011\012\015\040-\177]*$/,
//     'binary-compaction': /^[\x00-\xff]*$/
//   },
//   'planet': /^\d{1,}$/,
//   'postnet': /^\d{1,}$/,
//   'ean128': /^[\000-\177\xC8\xCA-\xCD]*$/,
//   'upca': /^\d{1,}$/,
//   'upce': /^\d{1,}$/
// };

/*  opts 예제 - https://github.com/bwipp/postscriptbarcode/wiki/Options-Reference
 *  includecheck, includecheckintext, includetext, textfont, textsize, textgaps, textxalign, textyalign, textxoffset, textyoffset
 *  showborder, borderwidth, borderleft, borderright, bordertop, borderbottom, barcolor, backgroundcolor, bordercolor, textcolor
 *  parse, parsefnc, height, width, inkspread, inkspreadh, inkspreadv,
 *  addontextxoffset, addontextyoffset, addontextfont, addontextsize
 *  guardwhitespace, guardwidth, guardheight, guardleftpos, guardrightpos, guardleftypos, guardrightypos
 */

// symdesc["code39"].opts = "includetext textxalign=center textgaps=2";
// symdesc["interleaved2of5"].opts = "includetext textxalign=center textgaps=1.5";
// symdesc["code93"].opts = "includetext textxalign=center textgaps=2";
// symdesc["ean13"].opts = "includetext";
// symdesc["ean8"].opts = "includetext";

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [
    {
      type: "select",
      label: "symbol",
      name: "symbol",
      property: {
        options: [
          "code11",
          "code39",
          "code93",
          "code128",
          "codebar",
          "ean128",
          "ean13",
          "ean8",
          "qrcode",
          "datamatrix",
          "industrial2of5",
          "interleaved2of5",
          "msi",
          "planet",
          "postnet",
          "upca",
          "upce",
          "pdf417",
          "isbn"
        ]
      }
    },
    {
      type: "checkbox",
      label: "monochrome",
      name: "monochrome"
    },
    {
      type: "checkbox",
      label: "show-text",
      name: "showText"
    }
  ],
  "value-property": "text"
};

const REDRAW_PROPS = ["symbol", "text", "showText", "height", "width"];

import { Component, RectPath, Shape, error } from "@hatiolab/things-scene";
import bwipjs from "bwip-js";
import { debounce } from "underscore";

export default class Barcode extends RectPath(Shape) {
  static get nature() {
    return NATURE;
  }

  get canvas() {
    if (!this._canvas) {
      this._canvas = document.createElement("canvas");

      this._canvas.style.display = "none";
      this._canvas.height = 1;
      this._canvas.width = 1;
    }

    return this._canvas;
  }

  get debouncer() {
    if (!this._debouncer) {
      this._debouncer = debounce(
        this.buildImage.bind(this),
        200,
        false /* 마지막에 확실히 실행 */
      );
    }

    return this._debouncer;
  }

  dispose() {
    super.dispose();
  }

  ready() {
    super.ready();
    this.buildImage();
  }

  buildImage() {
    var { symbol, text, width, height, includetext, textAlign } = this.state;

    this.canvas.width = width;
    this.canvas.height = height;

    bwipjs(
      this.canvas,
      {
        bcid: symbol, // Barcode type
        text, // Text to encode
        height, // Bar height, in millimeters
        width,
        includetext, // Show human-readable text
        textxalign: textAlign // Always good to set this
      },
      (err, cvs) => {
        if (err) {
          delete this._image;
          this.invalidate();
        } else {
          this._image = cvs;
          this.invalidate();
        }
      }
    );
  }

  render(context) {
    var { left = 0, top = 0, width = 0, height = 10 } = this.state;

    try {
      if (this._image) {
        context.drawImage(this._image, left, top, width, height);
      }
    } catch (e) {
      error(e);
    }
  }

  drawText() {
    // to nothing
  }

  onchange(props) {
    REDRAW_PROPS.every(prop => {
      if (prop in props) {
        this.debouncer();
        return false;
      }
      return true;
    });
  }
}

Component.register("barcode", Barcode);
