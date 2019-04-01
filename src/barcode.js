/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [
    {
      type: 'string',
      label: 'value',
      name: 'value'
    },
    {
      type: 'select',
      label: 'bcrtype',
      name: 'bcrtype',
      property: {
        options: [
          'code-39',
          'code-128'
        ]
      }
    }
  ]
};

import { Component, RectPath, Shape, error } from '@hatiolab/things-scene';

export default class Barcode extends RectPath(Shape) {

  static get nature() {
    return NATURE;
  }

  dispose() {
    super.dispose();
  }

  render(context) {

    // value의 색상
    context.beginPath();
  }

  get controls() {}
}

Component.register('barcode', Barcode);
