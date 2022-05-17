import { useEffect, useRef } from "react";
import styled from "styled-components";

import {
  calculateColumns,
  calculateRows,
  TunicCharacterRendererProps,
} from "./TunicCharacterRenderer.model";
import { render } from "./TunicCharacterRenderer.viewModel";

const Canvas = styled.canvas`
  border-radius: 5px;
`;

export const TunicCharacterRenderer = ({
  width,
  height,
  columnCount = 8,
  rowCount = 4,
  consonants,
  vowels,
  lineColor = "black",
  lineWidth = 1,
  isDrawingFrame = false,
}: TunicCharacterRendererProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const rows = calculateRows(width, rowCount);
  const columns = calculateColumns(height, columnCount);

  const _render = (
    canvas: HTMLCanvasElement | null,
    lineWidth: number,
    lineColor: string
  ) => {
    const context = canvas?.getContext("2d");
    if (context) {
      render(
        context,
        isDrawingFrame,
        rows,
        columns,
        width,
        height,
        lineWidth,
        lineColor,
        consonants ?? [],
        vowels ?? [],
        columnCount,
        rowCount
      );
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    _render(canvasRef.current, lineWidth, lineColor);

    return () => {
      canvas?.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
    };
  });

  return (
    <div>
      <Canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
