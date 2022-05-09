import { useEffect, useRef } from "react";
import styled from "styled-components";

import {
  calculateColumns,
  calculateRows,
  LanguageRendererProps,
} from "./LanguageRenderer.model";
import { render } from "./LanguageRenderer.viewModel";

const Canvas = styled.canvas`
  border-radius: 5px;
`;

export const LanguageRenderer = ({
  width,
  height,
  columnCount = 8,
  rowCount = 4,
  consonants,
  vowels,
  defaultLineColor = "black",
  defaultLineWidth = 1,
  hoverLineColor = "black",
  hoverLineWidth = 1,
  isDrawingFrame = false,
}: LanguageRendererProps) => {
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

  const _clear = (canvas: HTMLCanvasElement | null) => {
    const context = canvas?.getContext("2d");
    if (context) {
      context.clearRect(0, 0, width, height);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    const mouseOver = () => {
      _clear(canvas);
      _render(canvas, hoverLineWidth, hoverLineColor);
    };
    const mouseLeave = () => {
      _clear(canvas);
      _render(canvas, defaultLineWidth, defaultLineColor);
    };
    canvasRef.current?.addEventListener("mouseover", mouseOver);
    canvasRef.current?.addEventListener("mouseleave", mouseLeave);

    _render(canvas, defaultLineWidth, defaultLineColor);

    return () => {
      canvas?.removeEventListener("mouseover", mouseOver);
      canvas?.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div>
      <Canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
