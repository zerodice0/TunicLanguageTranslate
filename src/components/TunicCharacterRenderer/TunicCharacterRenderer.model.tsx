import { Line } from "../../modules/Drawer/Drawer.model";

export interface TunicCharacterRendererProps {
  width: number;
  height: number;
  rowCount?: number;
  columnCount?: number;
  consonants?: number[];
  vowels?: number[];
  lineWidth?: number;
  lineColor?: string;
  isDrawingFrame?: boolean;
  isReversePoint?: boolean;
}

interface Character {
  vowels: CharacterStroke;
  consonants: CharacterStroke;
}
export interface CharacterStroke {
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

export const calculateConsonantsAndVowels = (
  canvasWidth: number,
  canvasHeight: number,
  columnCount: number,
  rowCount: number,
  rows?: number[],
  columns?: number[]
): Character => {
  const _rows = rows ?? calculateRows(canvasWidth, rowCount);
  const _columns = columns ?? calculateColumns(canvasHeight, columnCount);

  const columnsHeightHalf = canvasHeight / columnCount;

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
      y: _columns[3],
    },
    {
      x: _rows[2],
      y: _columns[4] - columnsHeightHalf,
    },
    { x: _rows[0], y: _columns[5] },
    { x: _rows[2], y: _columns[6] },
    { x: _rows[4], y: _columns[5] },
    { x: _rows[2], y: _columns[7] },
  ];

  return {
    vowels: {
      upSide: [
        {
          start: points[0],
          end: { x: _rows[0], y: _columns[2] },
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
