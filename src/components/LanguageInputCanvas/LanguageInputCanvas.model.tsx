import { Line } from "../..//modules/Drawer/Drawer.model";

export interface LanguageInputCanvasProps {
  width: number;
  height: number;
  rowCount?: number;
  columnCount?: number;
  consonants?: number[];
  vowels?: number[];
}

interface Language {
  vowels: LanguageComponent;
  consonants: LanguageComponent;
}
interface LanguageComponent {
  upSide: Line[];
  downSide: Line[];
  sub: Line[];
}

export const calculateColumns = (canvasHeight: number, columnCount: number) =>
  Array(columnCount)
    .fill(0)
    .map((_, index) => (index * canvasHeight) / columnCount)
    .slice(1);
export const calculateRows = (canvasWidth: number, rowCount: number) =>
  Array(rowCount)
    .fill(0)
    .map((_, index) => (index * canvasWidth) / rowCount)
    .slice(1);

const isSameArray = (a: number[], b: number[]) => {
  a.sort((_a, _b) => _a - _b);
  b.sort((_a, _b) => _a - _b);

  return a.length === b.length && a.every((_a, index) => _a === b[index]);
};

const predefinedVowels = [
  { value: "a", list: [0, 1, 2, 3] },
  { value: "ar", list: [1, 2, 4, 5] },
  { value: "ah", list: [0, 1, 3] },
  { value: "ay", list: [1] },
  { value: "eh", list: [1, 2] },
  { value: "ere", list: [0, 3, 5] },
  { value: "e", list: [0, 3, 4, 5] },
  { value: "ee", list: [0, 1, 3, 4, 5] },
  { value: "eer", list: [0, 1, 3, 5] },
  { value: "i", list: [4, 5] },
  { value: "ie", list: [2] },
  { value: "ir", list: [0, 2, 3, 4, 5] },
  { value: "oh", list: [0, 1, 2, 3, 4, 5] },
  { value: "oi", list: [4] },
  { value: "oo", list: [0, 1, 2, 3, 4] },
  { value: "ou", list: [0, 3, 4] },
  { value: "ow", list: [5] },
  { value: "ore", list: [0, 1, 2, 3, 5] },
];

const predefinedConsonants = [
  { value: "th", list: [1, 3, 4, 5] },
  { value: "l", list: [1, 4] },
  { value: "b", list: [1, 5] },
  { value: "ch", list: [0, 4] },
  { value: "d", list: [1, 3, 5] },
  { value: "f", list: [2, 3, 4] },
  { value: "g", list: [2, 4, 5] },
  { value: "h", list: [1, 4, 5] },
  { value: "j", list: [1, 4] },
  { value: "k", list: [1, 2, 5] },
  { value: "l", list: [1, 4] },
  { value: "m", list: [3, 5] },
  { value: "n", list: [0, 3, 5] },
  { value: "ng", list: [0, 1, 2, 3, 4, 5] },
  { value: "p", list: [2, 4] },
  { value: "r", list: [1, 2, 4] },
  { value: "s", list: [1, 2, 3, 4] },
  { value: "sh", list: [0, 2, 3, 4, 5] },
  { value: "t", list: [0, 2, 4] },
  { value: "th", list: [0, 1, 2, 4] },
  { value: "th", list: [1, 3, 4, 5] },
  { value: "v", list: [0, 1, 5] },
  { value: "w", list: [0, 2] },
  { value: "y", list: [0, 1, 4] },
  { value: "z", list: [0, 1, 4, 5] },
  { value: "zh", list: [0, 1, 2, 3, 5] },
];

export const parsingConsonants = (consonants: number[]) =>
  predefinedConsonants.filter(data => isSameArray(consonants, data.list))[0]
    ?.value ?? "";

export const parsingVowels = (vowels: number[]) =>
  predefinedVowels.filter(data => isSameArray(vowels, data.list))[0]?.value ??
  "";

export const calculateConsonantsAndVowels = (
  canvasWidth: number,
  canvasHeight: number,
  columnCount: number,
  rowCount: number,
  rows?: number[],
  columns?: number[]
): Language => {
  const _rows = rows ?? calculateRows(canvasWidth, rowCount);
  const _columns = columns ?? calculateColumns(canvasHeight, columnCount);

  const columnsHeightHalf = canvasHeight / columnCount / 2;

  const points = [
    { x: _rows[0], y: _columns[1] },
    { x: _rows[2], y: _columns[0] },
    { x: _rows[4], y: _columns[1] },
    {
      x: _rows[2],
      y: _columns[3] - columnsHeightHalf,
    },
    {
      x: _rows[2],
      y: canvasHeight / 2,
    },
    {
      x: _rows[2],
      y: _columns[4] - columnsHeightHalf,
    },
    { x: _rows[0], y: _columns[5] },
    { x: _rows[2], y: _columns[6] },
    { x: _rows[4], y: _columns[5] },
  ];

  return {
    vowels: {
      upSide: [
        {
          start: points[0],
          end: { x: _rows[0], y: _columns[3] },
        },
        {
          start: points[0],
          end: points[1],
        },
        {
          start: points[1],
          end: points[2],
        },
      ],
      downSide: [
        {
          start: { x: _rows[0], y: _columns[4] },
          end: points[6],
        },
        {
          start: points[6],
          end: points[7],
        },
        {
          start: points[7],
          end: points[8],
        },
      ],
      sub: [],
    },
    consonants: {
      upSide: [
        {
          start: points[0],
          end: points[3],
        },
        {
          start: points[1],
          end: points[3],
        },
        {
          start: points[2],
          end: points[3],
        },
      ],
      downSide: [
        {
          start: points[5],
          end: points[6],
        },
        {
          start: points[5],
          end: points[7],
        },
        {
          start: points[5],
          end: points[8],
        },
      ],
      sub: [
        {
          start: points[4],
          end: points[3],
        },
      ],
    },
  };
};
