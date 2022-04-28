import { Line, Options, Point } from "./Drawer.model";

export const drawLine = (context: CanvasRenderingContext2D, line: Line) => {
  const { start, end } = line;

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
  options: Options
) => {
  if (options) {
    const { globalAlpha } = options;
    globalAlpha && (context.globalAlpha = globalAlpha);
  }

  lines.forEach(line => drawLine(context, line));
  context.globalAlpha = 1.0;
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
  if (options) {
    const { globalAlpha } = options;
    globalAlpha && (context.globalAlpha = globalAlpha);
  }
  points.forEach(point => drawPoint(context, point));
  context.globalAlpha = 1.0;
};
