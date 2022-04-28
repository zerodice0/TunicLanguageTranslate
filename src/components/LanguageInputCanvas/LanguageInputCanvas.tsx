import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { drawLine, drawLines, drawPoints } from "../../modules/Drawer/Drawer";
import {
  calculateColumns,
  calculateConsonantsAndVowels,
  calculateRows,
  LanguageInputCanvasProps,
} from "./LanguageInputCanvas.model";

const Canvas = styled.canvas<LanguageInputCanvasProps>`
  <canvas width=${prop => prop.width} height=${prop => prop.height}/>
`;

export const LanguageInputCanvas = ({
  width,
  height,
  columnCount = 8,
  rowCount = 6,
}: LanguageInputCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const rows = calculateRows(width, rowCount);
  const columns = calculateColumns(height, columnCount);
  const { consonants, vowels } = calculateConsonantsAndVowels(
    width,
    height,
    columnCount,
    rowCount,
    rows,
    columns
  );

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (context) {
      // Draw Frame
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
        { globalAlpha: 0.3 }
      );

      // Draw Crossline
      drawLine(
        context,
        {
          start: { x: 0, y: height / 2 },
          end: { x: width, y: height / 2 },
        },
        { lineWidth: 5 }
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

      drawLines(context, consonants.upSide, { lineWidth: 5 });
      drawLines(context, consonants.downSide, { lineWidth: 5 });
      drawLines(context, vowels.upSide, { lineWidth: 5 });
      drawLines(context, vowels.downSide, { lineWidth: 5 });
    }
  }, []);

  return (
    <div>
      <Canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
