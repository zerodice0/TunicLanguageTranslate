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
  Array(rowCount + 1)
    .fill(0)
    .map((_, index) => (index * canvasWidth) / rowCount);

const isSameArray = (a: number[], b: number[]) => {
  a.sort((_a, _b) => _a - _b);
  b.sort((_a, _b) => _a - _b);

  return a.length === b.length && a.every((_a, index) => _a === b[index]);
};

const predefinedVowels = [
  { value: "a", ipa: "æ", list: [0, 1, 2, 3] },
  { value: "ar", ipa: "ɑr", list: [1, 2, 4, 5] },
  { value: "ah", ipa: "ɒ", list: [0, 1, 3] },
  { value: "ay", ipa: "eɪ", list: [1] },
  { value: "eh", ipa: "ə", list: [1, 2] },
  { value: "ere", ipa: "ɛər", list: [0, 3, 5] },
  { value: "e", ipa: "ɛ", list: [0, 3, 4, 5] },
  { value: "ee", ipa: "iː", list: [0, 1, 3, 4, 5] },
  { value: "eer", ipa: "ɪər", list: [0, 1, 3, 5] },
  { value: "i", ipa: "ɪ", list: [4, 5] },
  { value: "ie", ipa: "aɪ", list: [2] },
  { value: "ir", ipa: "ɪər", list: [0, 2, 3, 4, 5] },
  { value: "oh", ipa: "oʊ", list: [0, 1, 2, 3, 4, 5] },
  { value: "oi", ipa: "ɔɪ", list: [4] },
  { value: "oo", ipa: "ʊər", list: [0, 1, 2, 3, 4] },
  { value: "ou", ipa: "aʊ", list: [0, 3, 4] },
  { value: "ow", ipa: "aʊ", list: [5] },
  { value: "ore", ipa: "ɔər", list: [0, 1, 2, 3, 5] },
];

const predefinedConsonants = [
  { value: "th", ipa: "ð", list: [1, 3, 4, 5] },
  { value: "l", ipa: "l", list: [1, 4] },
  { value: "b", ipa: "b", list: [1, 5] },
  { value: "ch", ipa: "tʃ", list: [0, 4] },
  { value: "d", ipa: "d", list: [1, 3, 5] },
  { value: "f", ipa: "f", list: [2, 3, 4] },
  { value: "g", ipa: "g", list: [2, 4, 5] },
  { value: "h", ipa: "h", list: [1, 4, 5] },
  { value: "j", ipa: "dʒ", list: [1, 4] },
  { value: "k", ipa: "k", list: [1, 2, 5] },
  { value: "m", ipa: "m", list: [3, 5] },
  { value: "n", ipa: "n", list: [0, 3, 5] },
  { value: "ng", ipa: "ŋ", list: [0, 1, 2, 3, 4, 5] },
  { value: "p", ipa: "p", list: [2, 4] },
  { value: "r", ipa: "ɹ", list: [1, 2, 4] },
  { value: "s", ipa: "s", list: [1, 2, 3, 4] },
  { value: "sh", ipa: "ʃ", list: [0, 2, 3, 4, 5] },
  { value: "t", ipa: "t", list: [0, 2, 4] },
  { value: "th", ipa: "θ", list: [0, 1, 2, 4] },
  { value: "v", ipa: "v", list: [0, 1, 5] },
  { value: "w", ipa: "w", list: [0, 2] },
  { value: "y(j)", ipa: "j", list: [0, 1, 4] },
  { value: "z", ipa: "z", list: [0, 1, 4, 5] },
  { value: "zh", ipa: "ʒ", list: [0, 1, 2, 3, 5] },
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
