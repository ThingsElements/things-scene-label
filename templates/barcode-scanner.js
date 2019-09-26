import icon from "./barcode-scanner.png";

export default {
  type: "barcode-scanner",
  description: "barcode-scanner",
  group: "IoT",
  /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon,
  model: {
    type: "barcode-scanner",
    left: 10,
    top: 10,
    width: 100,
    height: 100,
    fillStyle: "cyan",
    strokeStyle: "darkgray"
  }
};
