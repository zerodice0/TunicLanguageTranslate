import { Line } from "../..//modules/Drawer/Drawer.model";

export interface LanguageInputCanvasProps {
  width: number;
  height: number;
  rowCount?: number;
  columnCount?: number;
}

interface Language {
  vowels: LanguageComponent;
  consonants: LanguageComponent;
}
interface LanguageComponent {
  upSide: Line[];
  downSide: Line[];
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

  const point0 = { x: _rows[0], y: _columns[1] };
  const point1 = { x: _rows[2], y: _columns[0] };
  const point2 = { x: _rows[4], y: _columns[1] };
  const point3 = {
    x: _rows[2],
    y: _columns[3] - columnsHeightHalf,
  };
  const point4 = {
    x: _rows[2],
    y: canvasHeight / 2,
  };
  const point5 = {
    x: _rows[2],
    y: _columns[4] - columnsHeightHalf,
  };
  const point6 = { x: _rows[0], y: _columns[5] };
  const point7 = { x: _rows[2], y: _columns[6] };
  const point8 = { x: _rows[4], y: _columns[5] };

  return {
    vowels: {
      upSide: [
        {
          start: point0,
          end: { x: _rows[0], y: _columns[3] },
        },
        {
          start: point0,
          end: point1,
        },
        {
          start: point1,
          end: point2,
        },
      ],
      downSide: [
        {
          start: { x: _rows[0], y: _columns[4] },
          end: point6,
        },
        {
          start: point6,
          end: point7,
        },
        {
          start: point7,
          end: point8,
        },
      ],
    },
    consonants: {
      upSide: [
        {
          start: point0,
          end: point3,
        },
        {
          start: point1,
          end: point3,
        },
        {
          start: point2,
          end: point3,
        },
        {
          start: point4,
          end: point3,
        },
      ],
      downSide: [
        {
          start: point5,
          end: point6,
        },
        {
          start: point5,
          end: point7,
        },
        {
          start: point5,
          end: point8,
        },
      ],
    },
  };
};
