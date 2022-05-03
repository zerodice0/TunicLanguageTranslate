import { NeumorphismColors } from "./ToggleButton.model";

const substractHex = (a: number, b: number) =>
  Math.max(a - b, 0)
    .toString(16)
    .padStart(2, "0");

const addHex = (a: number, b: number) =>
  Math.min(a + b, 255)
    .toString(16)
    .padStart(2, "0");

export const calculateShadowColors = (
  rgb: string
): NeumorphismColors | null => {
  if (RegExp(/^#[0-9A-Fa-f]{6}/).test(rgb)) {
    return null;
  }

  const rgbs = [
    parseInt(rgb.slice(1, 3), 16),
    parseInt(rgb.slice(3, 5), 16),
    parseInt(rgb.slice(5, 7), 16),
  ];

  return {
    shadow: `#${rgbs.map(rgb => substractHex(rgb, 55)).join()}`,
    base: rgb,
    highlight: `#${rgbs.map(rgb => addHex(rgb, 55)).join()}`,
  };
};
