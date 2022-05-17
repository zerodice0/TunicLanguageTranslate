import { drawLine, drawLines } from "../../modules/Drawer/Drawer";
import { calculateConsonantsAndVowels } from "./TunicCharacterRenderer.model";

export const render = (
  context: CanvasRenderingContext2D,
  isDrawingFrame: boolean,
  rows: number[],
  columns: number[],
  width: number,
  height: number,
  lineWidth: number,
  lineColor: string,
  consonants: number[],
  vowels: number[],
  columnCount: number,
  rowCount: number
) => {
  const { consonants: _consonants, vowels: _vowels } =
    calculateConsonantsAndVowels(
      width,
      height,
      columnCount,
      rowCount,
      rows,
      columns
    );

  // Draw Frame
  isDrawingFrame &&
    drawLines(
      context,
      [
        ...rows.map(row => ({
          start: { x: row, y: 0 },
          end: { x: row, y: height },
        })),
        ...columns.map(column => ({
          start: { x: 0, y: column },
          end: { x: width, y: column },
        })),
      ],
      {
        globalAlpha: 0.3,
        lineColor: lineColor,
        lineWidth: lineWidth,
      }
    );

  // Draw Crossline
  drawLine(
    context,
    {
      start: { x: 0, y: height / 2 },
      end: { x: width, y: height / 2 },
    },
    { lineWidth: lineWidth, lineColor: lineColor }
  );

  // Draw Base Points
  // drawPoints(
  //   context,
  //   [
  //     { x: rows[0], y: columns[1] },
  //     { x: rows[2], y: columns[0] },
  //     { x: rows[4], y: columns[1] },
  //     point5,
  //     { x: rows[2], y: columns[6] },
  //     { x: rows[4], y: columns[5] },
  //     { x: rows[2], y: columns[2] + height / columnCount / 2 },
  //     { x: rows[2], y: columns[4] - height / columnCount / 2 },
  //   ],
  //   { globalAlpha: 0.3 }
  // );

  const consonantList = consonants?.map(
    consonant => [..._consonants.upSide, ..._consonants.downSide][consonant]
  );
  const vowelList = vowels?.map(
    vowel => [..._vowels.upSide, ..._vowels.downSide][vowel]
  );
  consonantList &&
    drawLines(context, consonantList, {
      lineWidth: lineWidth,
      lineColor: lineColor,
    });
  if (
    consonants?.some(
      consonant => consonant === 0 || consonant === 1 || consonant === 2
    )
  ) {
    drawLines(context, _consonants.sub, {
      lineWidth: lineWidth,
      lineColor: lineColor,
    });
  }
  vowelList &&
    drawLines(context, vowelList, {
      lineWidth: lineWidth,
      lineColor: lineColor,
    });
};
