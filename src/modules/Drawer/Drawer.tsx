import { Line, Options, Point } from "./Drawer.model";

export const drawLine = (
  context: CanvasRenderingContext2D,
  line: Line,
  options?: Options
) => {
  const { start, end } = line;
  context.globalAlpha = options?.globalAlpha ?? 1.0;
  context.lineWidth = options?.lineWidth ?? 1.0;

  if (context) {
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.stroke();
  }

  context.globalAlpha = 1.0;
  context.lineWidth = 1;
};

export const drawLines = (
  context: CanvasRenderingContext2D,
  lines: Line[],
  options?: Options
) => {
  lines.forEach(line => drawLine(context, line, options));
};

export const drawPoint = (context: CanvasRenderingContext2D, point: Point) => {
  const { x, y } = point;

  if (context) {
    context.beginPath();
    context.arc(x, y, 5, 0, 360);
    context.fill();
  }
};

export const drawPoints = (
  context: CanvasRenderingContext2D,
  points: Point[],
  options?: Options
) => {
  context.globalAlpha = options?.globalAlpha ?? 1;

  points.forEach(point => drawPoint(context, point));
  context.globalAlpha = 1.0;
};