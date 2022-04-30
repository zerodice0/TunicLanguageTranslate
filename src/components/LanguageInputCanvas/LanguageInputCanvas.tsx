import { useEffect, useRef } from "react";
import styled from "styled-components";

import { drawLine, drawLines } from "../../modules/Drawer/Drawer";
import {
  calculateColumns,
  calculateConsonantsAndVowels,
  calculateRows,
  LanguageInputCanvasProps,
  parsingConsonants,
  parsingVowels,
} from "./LanguageInputCanvas.model";

const Canvas = styled.canvas<LanguageInputCanvasProps>`
  <canvas width=${prop => prop.width} height=${prop => prop.height}/>
`;

export const LanguageInputCanvas = ({
  width,
  height,
  columnCount = 8,
  rowCount = 4,
  consonants,
  vowels,
}: LanguageInputCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const rows = calculateRows(width, rowCount);
  const columns = calculateColumns(height, columnCount);
  const { consonants: _consonants, vowels: _vowels } =
    calculateConsonantsAndVowels(
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
        { lineWidth: 5, lineColor: "white" }
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
        drawLines(context, consonantList, { lineWidth: 5, lineColor: "white" });
      if (
        consonants?.some(
          consonant => consonant === 0 || consonant === 1 || consonant === 2
        )
      ) {
        drawLines(context, _consonants.sub, {
          lineWidth: 5,
          lineColor: "white",
        });
      }
      vowelList &&
        drawLines(context, vowelList, { lineWidth: 5, lineColor: "white" });
    }
  }, []);

  return (
    <div>
      <Canvas ref={canvasRef} width={width} height={height} />
      <div>
        consonants: <span>{consonants && parsingConsonants(consonants)}</span>
      </div>
      <div>
        vowels: <span>{vowels && parsingVowels(vowels)}</span>
      </div>
    </div>
  );
};
