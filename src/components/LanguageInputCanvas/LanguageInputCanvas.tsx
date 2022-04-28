import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { drawLine, drawLines, drawPoints } from "../../modules/Drawer/Drawer";
import { LanguageInputCanvasProps } from "./LanguageInputCanvas.model";

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
  const rows = Array(rowCount)
    .fill(0)
    .map((_, index) => (index * width) / rowCount)
    .slice(1);
  const columns = Array(columnCount)
    .fill(0)
    .map((_, index) => (index * height) / columnCount)
    .slice(1);

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
      drawLine(context, {
        start: { x: 0, y: height / 2 },
        end: { x: width, y: height / 2 },
      });

      // Draw Base Points
      drawPoints(
        context,
        [
          { x: rows[0], y: columns[1] },
          { x: rows[2], y: columns[0] },
          { x: rows[4], y: columns[1] },
          { x: rows[0], y: columns[5] },
          { x: rows[2], y: columns[6] },
          { x: rows[4], y: columns[5] },
          { x: rows[2], y: columns[2] + height / columnCount / 2 },
          { x: rows[2], y: columns[4] - height / columnCount / 2 },
        ],
        { globalAlpha: 0.3 }
      );
    }
  }, []);

  return (
    <div>
      <Canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
