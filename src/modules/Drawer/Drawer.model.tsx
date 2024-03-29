export interface Point {
  x: number;
  y: number;
}

export interface Line {
  start: Point;
  end: Point;
}

export interface Options {
  globalAlpha?: number;
  lineWidth?: number;
  lineColor?: string;
}
