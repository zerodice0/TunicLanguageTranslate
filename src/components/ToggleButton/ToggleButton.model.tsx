export interface ToggleButtonStyledProps {
  distance?: number;
  blur?: number;
  padding?: number;
  radius?: number;
  backgroundShadow: string;
  color: string;
  foregroundShadow: string;
}

export interface ToggleButtonProps {
  distance?: number;
  blur?: number;
  padding?: number;
  radius?: number;
  color?: string;
  children?: React.ReactNode;
}

export interface NeumorphismColors {
  shadow: string;
  base: string;
  highlight: string;
}
