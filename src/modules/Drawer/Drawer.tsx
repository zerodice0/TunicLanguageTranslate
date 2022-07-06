import { Line, Options, Point } from "./Drawer.model";

export const drawLine = (
  context: CanvasRenderingContext2D,
  line: Line,
  options?: Options
) => {
  const { start, end } = line;
  context.globalAlpha = options?.globalAlpha ?? 1.0;
  context.lineWidth = options?.lineWidth ?? 1.0;
  context.strokeStyle = options?.lineColor ?? "black";

  if (context) {
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.stroke();
  }
};

export const drawLines = (
  context: CanvasRenderingContext2D,
  lines: Line[],
  options?: Options
) => {
  lines.map(line => drawLine(context, line, options));
};

export const drawPoint = (
  context: CanvasRenderingContext2D,
  point: Point,
  options?: Options
) => {
  const { x, y } = point;
  context.globalAlpha = options?.globalAlpha ?? 1.0;
  context.lineWidth = options?.lineWidth ?? 1.0;
  context.fillStyle = options?.lineColor ?? "black";

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
  points.forEach(point => drawPoint(context, point, options));
};
